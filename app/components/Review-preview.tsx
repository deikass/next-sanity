import React, { useEffect, useState } from 'react';
import Review from './Review';
import { getUserById } from '@/sanity/sanity-utils';
import { User } from '@/types/User';

interface Document {
  displayed: {
    _id: string;
    _createdAt: Date;
    title: string;
    text: string;
    rating: string;
    isProfilePhotoVisible: boolean;
    user: {
      _ref: string;
      _type: string;
    } | null;
  };
}

interface ReviewPreviewProps {
  document: Document;
}

const ReviewPreview: React.FC<ReviewPreviewProps> = ({ document }: ReviewPreviewProps) => {
  const userReferenceId = document.displayed.user?._ref;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userReferenceId) {
      getUserById(userReferenceId)
        .then(userData => setUser(userData))
        .catch(error => {
          console.error('Error fetching user:', error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [userReferenceId]);

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <Review
      className="m-8"
      _id={document.displayed._id}
      _createdAt={document.displayed._createdAt}
      title={document.displayed.title}
      text={document.displayed.text}
      rating={document.displayed.rating}
      isProfilePhotoVisible={document.displayed.isProfilePhotoVisible}
      user={user}
    />
  );
}

export default ReviewPreview;
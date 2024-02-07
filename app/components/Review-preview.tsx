import { User } from "@/types/User";
import Review from "./Review";

interface Document {
    displayed: {
      _id: string;
      _createdAt: Date;
      title: string;
      text: string;
      rating: string;
      isProfilePhotoVisible: boolean;
      user: User;
    };
  }
  
  interface ReviewPreviewProps {
    document: Document;
  }

  const ReviewPreview = ({ document }: ReviewPreviewProps) => (
    <>
    {console.log('test', document.displayed.user)}
        <Review
        className="m-8"
            _id={document.displayed._id}
            _createdAt={document.displayed._createdAt}
            title={document.displayed.title}
            text={document.displayed.text}
            rating={document.displayed.rating}
            isProfilePhotoVisible={document.displayed.isProfilePhotoVisible}
            user={document.displayed.user}
          />
    </>
  );
  
  export default ReviewPreview;
export type Review = {
    _id: string;
    _createdAt: Date;
    title: string;
    full_name: string;
    text: string;
    rating: string;
    className?: string;
    isProfilePhotoVisible: boolean,
    image: string;
}
import { User } from "./User";

export type Review = {
    _id: string;
    _createdAt: Date;
    title: string;
    text: string;
    rating: string;
    className?: string;
    isProfilePhotoVisible: boolean,
    user: User | null;
}
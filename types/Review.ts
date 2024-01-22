export type Review = {
    _id: string;
    _createdAt: Date;
    title: string;
    full_name: string;
    text: string;
    rating: number;
    className?: string;
}
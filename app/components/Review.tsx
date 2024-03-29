import { Review as ReviewProps } from "@/types/Review";
import Image from 'next/image';

const Review: React.FC<ReviewProps> = ({ title, text, className, rating, _createdAt, isProfilePhotoVisible, user }) => {
    const radioInputs = [];

    for (let index = 0; index < 5; index++) {
        const isChecked = rating === `${index + 1}`;

        radioInputs.push(
            <input
                key={index + 1}
                type="radio"
                name={`review-${_createdAt}`}
                className="mask mask-star-2 bg-orange-400"
                readOnly
                checked={isChecked}
            />
        );
    }

    return (
        <div className={`${className} border border-gray-300 rounded-lg p-5`}>
            <div className="flex items-center gap-3 pb-2">
                {isProfilePhotoVisible && user?.image && (
                    <Image
                        src={user.image}
                        className='object-cover rounded-full border border-gray-400 overflow-hidden w-[40px] h-[40px]'
                        alt={user.name}
                        width={40}
                        height={40}
                    />
                )}

                <h3 className=" text-lg font-bold text-gray-700 py-2">
                    {title}
                </h3>
            </div>

            <div className=" italic text-gray-500">
                {user?.name && (<span>{user.name}</span>)}
                {user?.lastName && (<span>{user.lastName}</span>)}
            </div>

            <p className=" text-gray-600">{text}</p>
            <div className="text-gray-400 pt-1">{_createdAt.toString()}</div>

            <div className="rating mt-2">{radioInputs}</div>
        </div >
    )
}

export default Review;
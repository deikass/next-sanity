import { Review as ReviewProps} from "@/types/Review";

const Review: React.FC<ReviewProps> = ({ title, text, className, rating, _createdAt, full_name }) => {
    return (
        <div className={`${className} border border-gray-300 rounded-lg p-5`}>
            <h3 className=" text-lg font-bold text-gray-700 pb-2">
                {title}
            </h3>

            <div className=" italic text-gray-500">{full_name}</div>
            <p className=" text-gray-600">{text}</p>
            <div className="text-gray-400 pt-1">{_createdAt.toString()}</div>


            <div className="rating mt-2">
                <input type="radio" name={`review-${_createdAt}`} className="mask mask-star-2 bg-orange-400" readOnly checked={rating === 1}/>
                <input type="radio" name={`review-${_createdAt}`} className="mask mask-star-2 bg-orange-400" readOnly checked={rating === 2}/>
                <input type="radio" name={`review-${_createdAt}`} className="mask mask-star-2 bg-orange-400" readOnly checked={rating === 3}/>
                <input type="radio" name={`review-${_createdAt}`} className="mask mask-star-2 bg-orange-400" readOnly checked={rating === 4}/>
                <input type="radio" name={`review-${_createdAt}`} className="mask mask-star-2 bg-orange-400" readOnly checked={rating === 5}/>
            </div>
        </div >
    )
}

export default Review;
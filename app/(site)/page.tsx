import { getProjects, getReviews } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import Review from '../components/Review';

export default async function Home() {
  const projects = await getProjects();
  const reviews = await getReviews();

  return (
    <div>
      <h1 className='text-7xl font-extrabold'>
        Hello I am
        <span
          className='
          bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
          bg-clip-text text-transparent
          '
        >
          &nbsp;David
        </span>!
      </h1>

      <p className='mt-3 text-xl text-gray-600'>Hello everyone! Check out my projects</p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500 aspect-video'
              />
            )}

            <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
          bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>


      <h2 className='mt-14 font-bold text-gray-700 text-3xl'>Reviews</h2>
      <div className='flex gap-3 flex-wrap'>
        {reviews.map((review) => (
          <Review
            key={review._id}
            className='mt-4 flex-1 min-w-64'
            _id={review._id}
            _createdAt={review._createdAt}
            title={review.title}
            text={review.text}
            rating={review.rating}
            isProfilePhotoVisible={review.isProfilePhotoVisible}
            user={review.user}
          />
        ))}
      </div>
    </div>

  );
}

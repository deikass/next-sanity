import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";

type Props = {
    params: { project: string }
}

// const serializers = {
//     types: {
//       heading1: ({ children }) => React.createElement('h1', { className: 'text-3xl font-bold' }, children),
//       heading2: ({ children }) => React.createElement('h2', { className: 'text-2xl font-bold' }, children),
//       heading3: ({ children }) => React.createElement('h3', { className: 'text-xl font-bold' }, children),
//       heading4: ({ children }) => React.createElement('h4', { className: 'text-lg font-bold' }, children),
//       heading5: ({ children }) => React.createElement('h5', { className: 'text-base font-bold' }, children),
//     },
//   };


export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent
                 text-5xl drop-shadow font-extrabold">
                    {project.name}
                </h1>

                <a className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500
                hover:text-pink-100 transition" href={project.url} title="View Project" target="_blank" rel="noopener noreferrer">View project</a>
            </header>

            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 mb-10 border-2 border-gray-700 object-cover rounded-xl"
            />

            <div className='prose prose-lg prose-headings:underline'>
                <PortableText
                    // serializers={serializers}
                    value={project.content}
                />
            </div>
        </div>
    )
}


import { urlForImage } from "@/sanity/lib/sanity.image";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import speakingurl from "speakingurl";
import { isPortableTextTextBlock, PortableTextBlock } from "sanity";

type Props = {
    params: { project: string }
}

type TableOfContentsItem = {
    level: number;
    text: string;
    headingUrl: string;
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    const projectContent = project.content;
    console.log('projectContent', projectContent);

    const customBlockComponents = {
        types: {
            image: ({ value }: any) => {
                const { alt, asset, width, height } = value;
                const imgUrl = urlForImage(asset).height(height).width(width).url()

                return <Image
                    width={width}
                    height={height}
                    alt={alt}
                    src={imgUrl}
                    sizes="100vw"
                    priority={false}
                />
            }
        }
    }


    function createTableOfContent(projectContent: PortableTextBlock[]): TableOfContentsItem[] {
        const tableOfContents: TableOfContentsItem[] = [];

        projectContent.forEach((block) => {
            if (isPortableTextTextBlock(block)) {
                if (block.style && block.style.startsWith('h')) {
                    const text = block.children.map((child) => child.text).join(' ');

                    tableOfContents.push({
                        level: parseInt(block.style.slice(1)),
                        text: text,
                        headingUrl: speakingurl(text),
                    });
                }
            }
        });

        return tableOfContents;
    }

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

<ol className="mb-5">
    {createTableOfContent(projectContent).map((heading: { headingUrl: string; level: string | number; text: string; }, index) => (
        <li key={index + heading.headingUrl}>
            <a href={'#' + heading.headingUrl}>
                {heading.level} - {heading.text}
            </a>
        </li>
    ))}
</ol>

            <div className='prose prose-lg prose-headings:underline'>
                <PortableText
                    value={projectContent}
                    components={customBlockComponents}
                />
            </div>
        </div>
    )
}


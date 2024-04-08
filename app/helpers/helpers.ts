 // @ts-ignore
 export function addHeadingUrls(projectContent) {
    // @ts-ignore
    projectContent.forEach((block) => {
        if (block.style && block.style.startsWith('h')) {
             // @ts-ignore
            const id = speakingurl(block.text);

            block.headingUrl = id;
        }
    });

    return projectContent;
}
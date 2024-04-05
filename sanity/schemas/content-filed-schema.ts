const contentField = {
    name: 'content',
    type: 'array',
    title: 'Content',
    of: [
        { type: 'block' },
        { type: 'customBlock' },
        { type: 'youtube'},
        {
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO',
                    options: {
                        isHighlighted: true,
                    }
                },
                {
                    name: 'width',
                    type: 'number',
                    title: 'Image width',
                    validation: (Rule: { required: () => any; }) => Rule.required(),
                },
                {
                    name: 'height',
                    type: 'number',
                    title: 'Image height',
                    validation: (Rule: { required: () => any; }) => Rule.required(),
                }
            ],
            initialValue: {
                width: 200,
                height: 200
              }
        }
    ],
};

export default contentField;
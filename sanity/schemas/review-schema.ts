const review = {
    name: 'review',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'full_name',
            title: 'Full name',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number'
        }

    ]
}

export default review;
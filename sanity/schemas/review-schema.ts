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
            name: 'text',
            title: 'Text',
            type: 'text',
        },
        {
            title: 'Select review rating',
            name: 'rating',
            type: 'string',
            initialValue: '5',
            options: {
                list: [
                    { title: '1 - Star *', value: '1' },
                    { title: '2 - Stars **', value: '2' },
                    { title: '3 - Stars ***', value: '3' },
                    { title: '4 - Stars ****', value: '4' },
                    { title: '5 - Stars *****', value: '5' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'isProfilePhotoVisible',
            title: 'Show profile image',
            initialValue: false,
            type: 'boolean',
            description: 'Toggle to indicate whether the profile picture is active or not',
            options: {
                layout: 'toggle',
            },
        },
        {
            name: 'user',
            type: 'reference',
            title: 'User',
            to: [{type: 'user' }]
        }
    ]
}

export default review;
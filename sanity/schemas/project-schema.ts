import { DocumentVideoIcon } from '@sanity/icons'
import contentField from './content-filed-schema';

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon: DocumentVideoIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        contentField
    ]
}

export default project;
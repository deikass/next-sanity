import { title } from "process";
import {UsersIcon} from '@sanity/icons'

const user = {
    name: 'user',
    title: 'Users',
    type: 'document',
    icon: UsersIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
    ]
}

export default user;
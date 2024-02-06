import { title } from "process";

const headerModule = {
    name: 'headerModule',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'string',
        },
        {
          name: 'links',
          type: 'array',
          title: 'Navigation links',
          of: [
            { type: 'reference', to: {type: 'page'} },
            {
              type: 'object',
              name: 'customLink',
              title: 'Custom Link',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url'
                }
              ],
            },
          ]
        }
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare: () => ({
          title: `Main Header settings`,
        }),
      },
}

export default headerModule;
const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        }
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare: () => ({
          title: `Prove site metadata`,
        }),
      },
}

export default siteSettings;
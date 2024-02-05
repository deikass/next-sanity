const footerModule = {
    name: 'footerModule',
    title: 'Footers',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'string',
        }
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare: () => ({
          title: `Select footer settings`,
        }),
      },
}

export default footerModule;
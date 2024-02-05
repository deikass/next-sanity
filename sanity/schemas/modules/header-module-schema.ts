const headerModule = {
    name: 'headerModule',
    title: 'Header',
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
          title: `Select header settings`,
        }),
      },
}

export default headerModule;
const siteColors = {
    name: 'colors',
    title: 'Colors',
    type: 'document',
    fields: [
      {
        name: 'backgroundColor',
        title: 'Background color',
        type: 'simplerColor',
      },
      {
        name: 'headerColor',
        title: 'Header color',
        type: 'simplerColor',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare: () => ({
        title: `Select site colors`,
      }),
    },
  };
  export default siteColors;
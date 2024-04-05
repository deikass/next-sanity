// schema.js
const customBlock = {
    name: 'customBlock',
    type: 'object',
    title: 'Custom Block',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url'
    },
    ],
  };

  export default customBlock;
import headerModule from "./header-module-schema";
import footerModule from "./footer-module-schema";

const modules = {
    name: 'modules',
    title: 'Modules',
    type: 'document',
    fields: [
      {
        name: 'header',
        title: 'Header',
        type: 'reference',
        // to: [{ type: 'heaheaderModuleder' }],
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'reference',
        // to: [{ type: 'footerModule' }],
      },
    ],
}

export default modules;
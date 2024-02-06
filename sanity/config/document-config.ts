import { TemplateItem, NewDocumentCreationContext } from 'sanity';

const disabledDocuments = ['footerModule', 'headerModule', 'colors', 'siteSettings'];

interface DocumentConfig {
  newDocumentOptions: (prev: TemplateItem[], { creationContext }: { creationContext: NewDocumentCreationContext }) => TemplateItem[];
}

const documentConfig: DocumentConfig = {
  newDocumentOptions: (prev, { creationContext }) => {
    const { type } = creationContext;

    if (type === 'global') {
      return prev.filter((template) => !disabledDocuments.includes(template.templateId));
    }
    return prev;
  },
};

export default documentConfig;
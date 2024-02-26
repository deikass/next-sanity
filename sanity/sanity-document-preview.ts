import JsonPreview from '../app/components/Preview-json';
import ReviewPreview from '../app/components/Review-preview';

interface DocumentNodeBuilder {
  document(): any; 
  view: any;
}

export const getDefaultDocumentNode = (S: DocumentNodeBuilder, { schemaType }: { schemaType: string }) => {
  if (schemaType === "review") {
    return S.document().views([
      S.view.form(),
      S.view.component(ReviewPreview).title('Review'),
      S.view.component(JsonPreview).title('JSON')
    ]);
  }

  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title('JSON')
  ]);
}

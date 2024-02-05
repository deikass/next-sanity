import { StructureBuilder } from "sanity/structure";

export const myStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings panel')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('875e222e-80e0-433f-95fc-841620d3a8ab')),
              S.listItem()
                .title('Colors')
                .child(S.document().schemaType('colors').documentId('colors'))
            ])
        ),
        S.listItem()
        .title('Modules')
        .child(
          S.list()
            .title('Modules')
            .items([
              S.listItem()
                .title('Header Module')
                .child(S.document().schemaType('headerModule').documentId('headerModule')),
              S.listItem()
                .title('Footer Module')
                .child(S.document().schemaType('footerModule').documentId('footerModule'))
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'colors', 'headerModule', 'footerModule'].includes(listItem.getId())
        ),
    ]);
};
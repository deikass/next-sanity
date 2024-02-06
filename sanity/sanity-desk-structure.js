export const myStructure = (S) => {
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
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
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
      S.divider(),
      S.listItem()
        .title('Filtered Reviews')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Reviews By Rating')
                .child(
                  S.list()
                    .title('Reviews By Rating')
                    .items([
                      S.listItem()
                        .title('1 - Star *')
                        .child(
                          S.documentList()
                            .title('1 - Star Reviews')
                            .filter('_type == "review" && rating == "1"')
                        ),
                      S.listItem()
                        .title('2 - Stars **')
                        .child(
                          S.documentList()
                            .title('2 - Stars Reviews')
                            .filter('_type == "review" && rating == "2"')
                        ),
                      S.listItem()
                        .title('3 - Stars ***')
                        .child(
                          S.documentList()
                            .title('3 - Stars Reviews')
                            .filter('_type == "review" && rating == "3"')
                        ),
                      S.listItem()
                        .title('4 - Stars ****')
                        .child(
                          S.documentList()
                            .title('4 - Stars Reviews')
                            .filter('_type == "review" && rating == "4"')
                        ),
                      S.listItem()
                        .title('5 - Stars *****')
                        .child(
                          S.documentList()
                            .title('5 - Stars Reviews')
                            .filter('_type == "review" && rating == "5"')
                        ),
                    ])
                ),
              S.listItem()
                .title('Reviews By User')
                .child(
                  S.documentTypeList('user')
                    .title('Reviews by user')
                    .child((userId) =>
                      S.documentList()
                        .title('Reviews')
                        .filter('_type == "review" && $userId == user._ref')
                        .params({ userId })
                    )
                ),
            ])
        ),
      S.listItem().title('All reviews').child(
        S.documentList()
          .title('All Reviews')
          .filter('_type == "review"')
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'colors', 'headerModule', 'footerModule'].includes(listItem.getId())
      ),
    ]);
};
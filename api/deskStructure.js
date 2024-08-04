export const deskStructure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('About')
				.child(
					S.document()
						.schemaType('about')
						.documentId('about')
				),
				...S.documentTypeListItems().filter(listItem => !['about'].includes(listItem.getId())),
		])
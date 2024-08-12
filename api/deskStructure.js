export const deskStructure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Blog')
				.child(S.documentTypeList('blog')),
			S.divider(),
			S.listItem()
				.title('Expertise')
				.child(S.documentTypeList('expertise')),
			S.listItem()
				.title('Team')
				.child(S.documentTypeList('team')),
			S.listItem()
				.title('About')
				.child(
					S.list()
						.title('About Page Editor')
						.items([
							S.listItem()
								.title('Page Builder')
								.child(
									S.document()
										.schemaType('pageBuilder')
										.documentId('pageBuilder')
										.title('Page Builder')
								),
							S.listItem()
								.title('Page Content')
								.child(S.documentTypeList('section')),
						])
				),
			S.listItem()
				.title('Award')
				.child(S.documentTypeList('award')),
			S.listItem()
				.title('Office')
				.child(S.documentTypeList('office')),
		])
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
			team(S),
			about(S),
			S.listItem()
				.title('Award')
				.child(S.documentTypeList('award')),
			S.listItem()
				.title('Office')
				.child(S.documentTypeList('office')),
		]);

const team = (S) => S.listItem()
	.title('Team')
	.child(
		S.list()
			.title('Team')
			.items([
				S.listItem()
					.title('Partner')
					.child(
						S.documentList()
							.title('Partner')
							.filter('_type == "team" && roleGroup == "1"')
					),
				S.listItem()
					.title('Senior Associates')
					.child(
						S.documentList()
							.title('Senior Associates')
							.filter('_type == "team" && roleGroup == "2"')
					),
				S.listItem()
					.title('Associates')
					.child(
						S.documentList()
							.title('Associates')
							.filter('_type == "team" && roleGroup == "3"')
					),
				S.listItem()
					.title('Core Team')
					.child(
						S.documentList()
							.title('Core Team')
							.filter('_type == "team" && roleGroup == "4"')
					),
			])
	);

const about = (S) => S.listItem()
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
	);
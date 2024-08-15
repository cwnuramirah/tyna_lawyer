export default {
	name: 'pageBuilder',
	type: 'document',
	title: 'Page Builder',
	fields: [
		{
			title: 'Configure Content',
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'section' }]
				}
			],
		}
	],
}
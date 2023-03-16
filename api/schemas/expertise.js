export default {
	name: 'expertise',
	title: 'Expertise',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'subpractice',
			title: 'Subpractice',
			type: 'array',
			of: [
				{
					name: 'subName',
					title: 'Subpractice Name',
					type: 'string',
				}
			]
		},
		{
			name: 'title3',
			title: 'Title 3',
			type: 'string',
		},
	]
}
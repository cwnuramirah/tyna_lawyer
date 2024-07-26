export default {
	name: 'about',
	type: 'document',
	title: 'About Us',
	groups: [
		{
			name: 'story',
			title: 'Story'
		},
		{
			name: 'principleGroup',
			title: 'Principle',
		},
		{
			name: 'awardGroup',
			title: 'AWARD LIST',
		}
	],
	fields: [
		{
			name: 'aboutPageTitle',
			title: 'About Page Title',
			type: 'string',
		},
		{
			name: 'introduction',
			title: 'INTRODUCTION',
			description: 'Tell visitors about our firm',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'principleList',
			title: 'OUR PRINCIPLES',
			group: 'principleGroup',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'principle',
					fields: [
						{
							name: 'principleTitle',
							type: 'string'
						},
						{
							name: 'principleDesc',
							type: 'string'
						}
					]
				}
			],
			sortable: true,

		},
	]
}
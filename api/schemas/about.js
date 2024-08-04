export default {
	name: 'about',
	type: 'document',
	title: 'About',
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
			name: 'historyGroup',
			title: 'History',
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
		{
			name: 'history',
			title: 'OUR HISTORY',
			group: 'historyGroup',
			type: 'array',
			of: [
				{
					name: 'event',
					type: 'object',
					title: 'EVENT',
					fields: [
						{
							name: 'title',
							type: 'string'
						},
						{
							name: 'year',
							type: 'string',
							title: 'YEAR OF EVENT',
							description: 'Number in format: YYYY'
						},
						{
							name: 'desc',
							type: 'string',
							title: 'Content'
						},
					]
				}
			],
			sortable: true,
		},
	]
}
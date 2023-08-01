export default {
	name: 'expertise',
	type: 'document',
	title: 'Expertise',
	fields: [
		{
			title: 'Practice Area',
			name: 'practice',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
		},
		{
			title: 'Sub-areas',
			name: 'subareas',
			type: 'array',
			of: { type: 'string' },
		},
		{
			title: 'Practice Group Head',
			name: 'head',
			type: 'reference',
			to: [{ type: 'team'}],
		},
		{
			title: 'Brief Description',
			name: 'brief',
			type: 'text',
			rows: 4,
			validation: Rule => Rule.max(280).error('Too wordy'),
		},
		{
			title: 'Full Description',
			name: 'content',
			description: 'The content where visitor can learn more about this practice area',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}
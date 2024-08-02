export default {
	name: 'expertise',
	type: 'document',
	title: 'Expertise',
	fields: [
		{
			name: 'practice',
			title: 'PRACTICE AREA',
			type: 'string',
			validation: rule => rule.required(),
		},
		{
			name: 'slug',
			title: 'SLUG',
			type: 'slug',
			validation: rule => rule.required(),
		},
		{
			title: 'SUB-AREAS',
			name: 'subareas',
			type: 'array',
			of: [{ type: 'string' }],
			validation: rule => rule.required(),
		},
		{
			title: 'PRACTICE GROUP HEAD',
			name: 'head',
			type: 'reference',
			to: [{ type: 'team'}],
			validation: rule => rule.required(),
		},
		{
			title: 'BRIEF DESCRIPTION',
			name: 'brief',
			type: 'text',
			rows: 4,
			validation: Rule => Rule.max(280).error('Too wordy'),
		},
		{
			title: 'FULL DESCRIPTION',
			name: 'content',
			description: 'The content where visitor can learn more about this practice area',
			type: 'array',
			of: [{ type: 'block' }],
			validation: rule => rule.required(),
		}
	]
}
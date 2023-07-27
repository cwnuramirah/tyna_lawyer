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
			title: 'Brief Description',
			name: 'brief',
			type: 'text',
			rows: 4,
			validation: Rule => Rule.max(280).error('Too wordy'),
		},
		{
			title: 'Sub-areas',
			name: 'subareas',
			type: 'array',
			of: [{ type: 'string' }],
		}
	]
}
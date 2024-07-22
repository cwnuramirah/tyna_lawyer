export default {
	name: 'award',
	type: 'document',
	title: 'Award',
	fields: [
		{
			name: 'awardImg',
			type: 'image',
			title: 'AWARD IMAGE',
			description: 'Badge/Logo of the recognition to be display',
			options: { hotspot: true }
		},
		{
			name: 'awardName',
			type: 'string',
			title: 'AWARD NAME',
			validation: rule => rule.required(),
		},
		{
			name: 'awardDate',
			type: 'date',
			title: 'AWARD/ACCOLADES ISSUED DATE',
			description: 'When did the firm received this recognition?',
			options: { dateFormat: 'MM-YYYY' },
		},
		{
			name: 'awardDesc',
			type: 'string',
			title: 'AWARD DESCRIPTION',
		}
	]
}
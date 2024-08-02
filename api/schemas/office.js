export default {
	name: 'office',
	type: 'document',
	title: 'Office',
	fields: [
		{
			name: 'region',
			type: 'string',
			title: 'REGION',
			validation: rule => rule.required(),
		},
		{
			name: 'phone',
			type: 'string',
			title: 'OFFICE PHONE NUMBER',
			validation: rule => rule.required(),
		},
		{
			name: 'email',
			type: 'string',
			title: 'OFFICE EMAIL ADDRESS',
			validation: rule => rule.required(),
		},
		{
			name: 'address',
			type: 'string',
			title: 'OFFICE ADDRESS',
			validation: rule => rule.required(),
		}
	]
}
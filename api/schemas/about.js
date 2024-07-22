export default {
	name: 'about',
	type: 'document',
	title: 'About Us',
	fields: [
		{
			name: 'introduction',
			title: 'INTRODUCTION',
			description: 'Tell visitors about our firm',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'award',
			title: 'OUR AWARDS, ACCOLADES AND AFFILIATIONS',
			description: 'Badges/Logo of awards, accolades and affiliations',
			type: 'array',
			of: [{ type: 'award'}],
		}
	]
}
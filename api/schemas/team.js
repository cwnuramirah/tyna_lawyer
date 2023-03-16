export default {
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		{
			name: 'fullName',
			title: 'Full Name',
			type: 'string',
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'background',
			title: 'Background',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}
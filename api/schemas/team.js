export default {
	name: 'team',
	type: 'document',
	title: 'Team',
	fields: [
		{
			title: 'Full Name',
			name: 'fullName',
			type: 'string',
		},
		{
			name: 'potrait',
			title: 'Potrait',
			type: 'image',
			options: {
				hotspot: true,
			}
		},

		{
			title: 'Practice Area Involved',
			name: 'practiceArea',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'expertise' }]
				}
			],
		},
		{
			title: 'Role Group',
			name: 'roleGroup',
			type: 'string',
			options: {
			  list: [
				{title: 'Partner', value: '1'},
				{title: 'Senior Associates', value: '2'},
				{title: 'Associates', value: '3'},
				{title: 'Core Team', value: '4'}
			  ], // <-- predefined values
			  layout: 'radio' // <-- defaults to 'dropdown'
			}
		  },
		  {
			title: 'Role',
			name: 'role',
			description: 'Specify the role to be displayed',
			type: 'string',
			hidden: ({parent}) => (parent?.roleGroup == 2 || parent?.roleGroup == 3)
		  },
		{
			title: 'Profile',
			name: 'profile',
			type: 'text',
			row: 20,
			validation: Rule => Rule.max(800).error('Too wordy'),
		},
	]
}
const ROLE_GROUP = [
	{ title: 'Partner', value: '1' },
	{ title: 'Senior Associates', value: '2' },
	{ title: 'Associates', value: '3' },
	{ title: 'Core Team', value: '4' }
]

export default {
	name: 'team',
	type: 'document',
	title: 'Team',
	fields: [
		{
			name: 'fullName',
			title: 'FULL NAME',
			type: 'string',
			validation: rule => rule.required(),
		},
		{
			name: 'potrait',
			title: 'PORTRAIT',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: rule => rule.required(),
		},

		{
			name: 'practiceArea',
			title: 'PRACTICE AREA INVOLVED',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'expertise' }]
				}
			],
			validation: rule => rule.required(),
		},
		{
			name: 'roleGroup',
			title: 'ROLE GROUP',
			type: 'string',
			options: {
				list: ROLE_GROUP,
				layout: 'radio'
			},
			validation: rule => rule.required(),
		},
		{
			name: 'role',
			title: 'ROLE',
			description: 'Specify the role to be displayed',
			type: 'string',
			hidden: ({ parent }) => (parent?.roleGroup == 2 || parent?.roleGroup == 3)
		},
		{
			name: 'profile',
			title: 'PROFILE',
			type: 'text',
			row: 20,
			validation: Rule => Rule.max(750).error('Too wordy. Please make it less than 750'),
		},
	],
	preview: {
		select: {
			title: 'fullName',
			practice0: 'practiceArea.0.practice',
			practice1: 'practiceArea.1.practice',
			media: 'potrait'
		},
		prepare: ({title, practice0, practice1, media}) => {
			const mainPractice = practice0;
			const hasMoreAreas = Boolean(practice1)
			return {
				title: title,
				subtitle: hasMoreAreas ? `${mainPractice}, ...` : mainPractice,
				media: media,
			}
		}
	}
}
import { hideImageField, LAYOUT } from "./layout";

export default {
	name : 'section',
	type: 'document',
	title: 'Page Content',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Section Title',
			validation: rule => rule.required(),
		},
		{
			name: 'displayTitle',
			type: 'boolean',
			title: 'Display Title'
		},
		{
			name: 'layout',
			type: 'string',
			title: 'Layout',
			description: 'Choose how the content will be display',
			options: {
				list: LAYOUT,
				layout: 'dropdown'
			},
			validation: rule => rule.required(),
		},
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			hidden: ({ parent }) => (parent?.layout == undefined),
			validation: rule => rule.required(),
		},
		{
			name: 'text',
			title: 'Text',
			type: 'string',
			hidden: ({ parent }) => (parent?.layout == undefined),
			validation: rule => rule.required(),
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
				hotspot: true,
			},
			hidden: ({parent}) => hideImageField(parent?.layout)
		},
	]
}
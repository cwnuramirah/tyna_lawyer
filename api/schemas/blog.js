export default {
	name: 'blog',
	type: 'document',
	title: 'Blog',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'POST TITLE',
			description: 'Write precise, eye catching title. Avoid click bait'
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'POST URL SLUG',
			description: 'Create SEO-friendly slug for this post'
		},
		{
			name: 'tag',
			title: 'POST TAGS/CATEGORY',
			type: 'string',
			options: {
				list: [
					{ title: 'News', value: 'News' },
					{ title: 'Articles', value: 'Articles' },
				],
				layout: 'radio'
			}
		},
		{
			name: 'category',
			title: 'EXPERTISE CATEGORY',
			type: 'reference',
			to: [{ type: 'expertise'}],
			hidden: ({ parent }) => (parent?.postTags == 'News')
		},
		{
			name: 'author',
			title: 'AUTHOR',
			type: 'reference',
			to: [{ type: 'team'}],
		},
		{
			name: 'date',
			type: 'date',
			title: 'POST PUBLISHED DATE',
			options: { dateFormat: 'DD-MM-YYYY' },
		},
		{
			name: 'thumbnail',
			type: 'image',
			options: {
				hotspot: true,
			},
			description: 'Upload high resolution landscape image for post thumbnail/cover. Preferably image with 16:9 ratio'
		},
		{
			name: 'content',
			title: 'POST CONTENT',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}
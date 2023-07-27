import sanityClient from '@sanity/client'

const client = sanityClient({
	projectId: 'pr9ovigi',
	dataset: 'development',
    useCdn: true,
	apiVersion: '2023-07-27'
});

export default client
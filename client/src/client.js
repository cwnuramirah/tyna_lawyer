import { createClient } from '@sanity/client'

const client = createClient({
	projectId: 'pr9ovigi',
	dataset: 'development',
    useCdn: true,
	apiVersion: '2023-07-27'
});

export default client
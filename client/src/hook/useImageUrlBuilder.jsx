import client from '../client';
import imageUrlBuilder from '@sanity/image-url'

export const useImageUrlBuilder = () => {
		// A pre-configured url-builder from sanity client
		const builder = imageUrlBuilder(client)

		// Since I can't call hook directly in image callback,
		// specifiying this function works.
		function urlFor(source) {
			return builder.image(source).url()
		}
  return {urlFor}
}

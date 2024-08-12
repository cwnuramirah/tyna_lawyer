import { useEffect, useState } from 'react'
import client from '../client';

export const useAboutContent = () => {
	const [content, setContent] = useState([]);

	async function getContent() {
		const res = await client.fetch(
			`
				*[_type == 'pageBuilder'] {
					'content': content[]->{
						title, 
						layout, 
						heading,
						text,
						image,
					}
				}
			`
		)
			.then((data) => setContent(data[0].content))
			.catch((err) => console.log(err));
		return res;
	};

	useEffect(() => {
		getContent();
		console.log(content)
	}, [])

	return { content }
}
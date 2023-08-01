import { useEffect, useState } from "react";
import client from '../client';

export const useExpertiseData = () => {
	const [expertiseData, setExpertiseData] = useState([]);

	async function getExpertiseData() {
		const res = await client.fetch(
			`*[_type == 'expertise']{
				practice,
				'slug': slug.current,
				subareas,
				brief,
				_id,
			}`
		)
			.then((data) => setExpertiseData(data))
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getExpertiseData();
	}, [])

	return { expertiseData };
};
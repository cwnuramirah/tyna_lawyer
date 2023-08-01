import { useEffect, useState } from 'react'
import client from '../client';

export const usePartnerData = () => {
	const [partnerData, setPartnerData] = useState([]);

	async function getPartnerData() {

		const res = await client.fetch(
			`*[_type == 'team' && roleGroup == '1']
			{
				_id,
				fullName,
				role,
				'practiceArea': practiceArea[]->practice,
				'potrait': potrait.asset._ref
			}[0...3]
			`
		)
			.then((data) => setPartnerData(data))
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getPartnerData();
	}, [])

	return { partnerData }
}

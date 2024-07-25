import { useEffect, useState } from 'react'
import client from '../client';
import { useImageUrlBuilder } from './useImageUrlBuilder';

export const usePartnerData = () => {
	const [partnerData, setPartnerData] = useState([]);
	const { urlFor } = useImageUrlBuilder();

	async function getPartnerData() {

		const res = await client.fetch(
			`
				*[_type == 'team' && roleGroup == '1']{
						_id,
						fullName,
						role,
						'practiceArea': practiceArea[]->practice,
						'potrait': potrait.asset._ref
					}[0...3]
			`
		)
			.then((data) => {
				data.map((partner) => {
					partner.potrait = urlFor(partner.potrait)
					return partner
				})
				setPartnerData(data)
			})
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getPartnerData();
	}, [])

	return { partnerData }
}

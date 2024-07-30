import { useEffect, useState } from "react";
import client from "../client";
import { useImageUrlBuilder } from "./useImageUrlBuilder";

export const useAwardData = () => {
	const [ awardData, setAwardData ] = useState([]);
	const { urlFor } = useImageUrlBuilder();

	async function getAwardData() {
		const res = client.fetch(
			`*[_type == 'award']{
				_id,
				awardName,
				awardDate,
				awardDesc,
				'awardImg': awardImg.asset._ref,
			}`
		).then((data) => {
			data.map((award) => {
				award.awardImg = urlFor(award.awardImg);
				return award;
			});
			setAwardData(data);
		})
		.catch((err) => console.log(err));

		return res;
	}

	useEffect(() => {
		getAwardData();
	}, [])

	return { awardData };
}
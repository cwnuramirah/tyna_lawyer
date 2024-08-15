import React from 'react'
import { useImageUrlBuilder } from '../hook/useImageUrlBuilder';
import useData from '../hook/useData';

const AwardSection = () => {
	const awardData = useData(
		`
			*[_type == 'award']{
				_id,
				awardName,
				awardDate,
				awardDesc,
				'awardImg': awardImg.asset._ref,
			}
		`
		, [])
	const { urlFor } = useImageUrlBuilder();

	return (
		<section className='awards'>
			<ul className='awards--body'>
				{
					awardData.map((award) => (
						<li key={award._id} className='awards--list'>
							<img src={urlFor(award.awardImg)} alt={award.awardName} />
						</li>
					))
				}
			</ul>
		</section>
	)
}

export default AwardSection
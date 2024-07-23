import React from 'react'
import { useAwardData } from '../data/useAwardData'
// import { useImageUrlBuilder } from '../data/useImageUrlBuilder';

const AwardSection = () => {
	const { awardData } = useAwardData();
	// const { urlFor } = useImageUrlBuilder();

	return (
		<section className='awards'>
			<ul className='awards--body'>
				{
					awardData.map((award) => (
						<li key={award._id} className='awards--list'>
							<img src={award.awardImg} alt={award.awardName} />
						</li>
					))
				}
			</ul>
		</section>
	)
}

export default AwardSection
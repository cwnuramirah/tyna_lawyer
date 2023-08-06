import React from 'react'
import { usePartnerData } from '../data/usePartnerData';

const TeamSection = () => {

	const { partnerData } = usePartnerData()

	return (
		<section className='team'>
			<h1 className='team--header'>Years of experience and top knowledge combined.</h1>
			<ul className='team--body'>
				{
					partnerData.map((partner) => (
						<li key={partner._id} className='team--list'>
							<figure>
								<img src={partner.potrait} alt={partner.fullName + ', ' + partner.role + ' at Taufiq Yong & Associates'} />
								<figcaption>
									<strong>{partner.fullName}</strong><br />
									{partner.practiceArea[0] + ', ' + partner.practiceArea[1]}
								</figcaption>
							</figure>
						</li>
					))}
			</ul>
			<button className='btn btn-primary'>Meet Our Team</button>
		</section>
	)
}

export default TeamSection
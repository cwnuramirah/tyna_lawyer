import React from 'react'
import { usePartnerData } from '../data/usePartnerData';
import { Link } from 'react-router-dom';

const TeamSection = () => {

	const { partnerData } = usePartnerData()

	return (
		<section className='partner'>
			<h1 className='partner--header'>Years of experience and top knowledge combined.</h1>
			<ul className='partner--body'>
				{
					partnerData.map((partner) => (
						<li key={partner._id} className='partner--list'>
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
			<Link to='/team' className='btn btn-primary'>Meet Our Team</Link>
		</section>
	)
}

export default TeamSection
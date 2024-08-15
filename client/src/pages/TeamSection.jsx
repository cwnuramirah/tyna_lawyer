import React from 'react'
import { Link } from 'react-router-dom';
import { useImageUrlBuilder } from '../hook/useImageUrlBuilder';
import useData from '../hook/useData';

const TeamSection = () => {

	const partnerData = useData(
		`
			*[_type == 'team' && roleGroup == '1']{
				_id,
				fullName,
				role,
				'practiceArea': practiceArea[]->practice,
				'potrait': potrait.asset._ref
			}[0...3]
		`
		, [])

	const { urlFor } = useImageUrlBuilder()

	return (
		<section className='partner'>
			<h1 className='partner--header'>Years of experience and top knowledge combined.</h1>
			<ul className='partner--body'>
				{
					partnerData.map((partner) => (
						<li key={partner._id} className='partner--list'>
							<figure>
								<img src={urlFor(partner.potrait)} alt={partner.fullName + ', ' + partner.role + ' at Taufiq Yong & Associates'} />
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
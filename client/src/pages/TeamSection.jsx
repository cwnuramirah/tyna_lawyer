import React, { useEffect, useState } from 'react'
import client from '../client';
import imageUrlBuilder from '@sanity/image-url'

const TeamSection = () => {
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

	// Get a pre-configured url-builder from your sanity client
	const builder = imageUrlBuilder(client)

	// Then we like to make a simple function like this that gives the
	// builder an image and returns the builder for you to specify additional
	// parameters:
	function urlFor(source) {
		return builder.image(source)
	}
	return (
		<section className='team'>
			<h1 className='team--header'>Years of experience and top knowledge combined.</h1>
			<ul className='team--body'>
				{
					partnerData.map((partner) => (
						<li key={partner._id} className='team--list'>
							<figure>
								<img src={urlFor(partner.potrait).url()} alt={partner.fullName + ', ' + partner.role + ' at Taufiq Yong & Associates'} />
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
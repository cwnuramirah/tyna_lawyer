import React, { useEffect, useState } from 'react'
import client from '../client';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';

const Team = () => {
	const [teamData, setTeamData] = useState([]);
	const { urlFor } = useImageUrlBuilder();

	async function getTeamData() {
		const res = await client.fetch(
			`
				*[_type == 'team'] {
					fullName,
					roleGroup,
					'potrait': potrait.asset._ref,
				}
			`
		)
		.then((data) => {
			data.map((member) => {
				member.potrait = urlFor(member.potrait);
				return member;
			})
			setTeamData(data);
		})
		.catch((err) => console.log(err))
	}

	useEffect(() => {
		getTeamData();
	}, [])

	return (
		<main className='team'>
			<section className='team--header'>
				<h1>Our Diligent Team</h1>
			</section>
			<section >
				{
					teamData.length !== 0 ?
					<ul className='team--body'>
						{
							teamData.map((member, index) => (
								<li key={index} className='team--list'>
									<figure>
										<img src={member.potrait} alt={member.fullName} />
										<figcaption>
											<strong>
												{member.fullName}
											</strong>
											<br />
											<p>Associates</p>
										</figcaption>
									</figure>
								</li>
							))
						}
					</ul>
					:
					<p>Getting team...</p>
				}
			</section>
		</main>
	)
}

export default Team
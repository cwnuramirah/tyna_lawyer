import React, { useEffect, useState } from 'react'
import client from '../client';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';
import Skeleton from 'react-loading-skeleton';
import ChangeDocumentTitle from '../data/changeDocumentTitle';

const Team = () => {
	const [teamData, setTeamData] = useState([]);
	const { urlFor } = useImageUrlBuilder();
	const [imageLoading, setImageLoading] = useState(true);

	ChangeDocumentTitle('Team')

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

		return res;
	}

	useEffect(() => {
		getTeamData();
	}, [])

	const teamMemberSkeletons = Array.apply(null, Array(5)).map((index) =>
		<li key={index} className='team--list'>
			<Skeleton className='team--list_image' />
			<div className='team--list_detail'>
				<Skeleton width={100} />
				<br />
				<Skeleton width={50} />
			</div>
		</li>
	)

	return (
		<main className='team'>
			<section className='team--header'>
				<h1>Our Diligent Team</h1>
			</section>
			<section >
				<ul className='team--body'>
					{
						teamData.length !== 0 ?
							teamData.map((member, index) => (
								<li key={index} className='team--list'>
									<div className='team--list_image' style={{ display: imageLoading ? "none" : "flex" }}>
										<img src={member.potrait} alt={member.fullName}
											onLoad={() => setImageLoading(false)} />
									</div>
									<Skeleton className={'team--list_image'} style={{ display: imageLoading ? "flex" : "none" }} />
									<div className='team--list_detail'>
										<strong>
											{member.fullName}
										</strong>
										<br />
										<p>Associates</p>
									</div>
								</li>
							))
							:
							teamMemberSkeletons
					}
				</ul>
			</section>
		</main>
	)
}

export default Team
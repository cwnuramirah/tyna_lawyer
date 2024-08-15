import React, { useState } from 'react';
import { useImageUrlBuilder } from '../hook/useImageUrlBuilder';
import Skeleton from 'react-loading-skeleton';
import ChangeDocumentTitle from '../hook/changeDocumentTitle';
import useData from '../hook/useData';

const Team = () => {
	const { urlFor } = useImageUrlBuilder();
	const [imageLoading, setImageLoading] = useState(true);

	ChangeDocumentTitle('Team')

	const teamQuery = (roleGroup) =>
		`
			*[_type == 'team' && roleGroup == '${roleGroup}']{
				_id,
				fullName,
				'practiceArea': practiceArea[]->practice,
				'potrait': potrait.asset._ref
			}
		`
	const partnerData = useData(teamQuery(1), [])
	const seniorData = useData(teamQuery(2), [])
	const associateData = useData(teamQuery(3), [])
	const coreData = useData(teamQuery(4), [])

	const memberListItem = (member, roleGroup) => {
		return <li key={member.potrait} className='team--list'>
			<div className='team--list_image' style={{ display: imageLoading ? "none" : "flex" }}>
				<img src={urlFor(member.potrait)} alt={member.fullName}
					onLoad={() => setImageLoading(false)} />
			</div>
			<Skeleton className={'team--list_image'} style={{ display: imageLoading ? "flex" : "none" }} />
			<div className='team--list_detail'>
				<strong>
					{member.fullName}
				</strong>
				<br />
				<p>{roleGroup}</p>
			</div>
		</li>
	}

	const teamMemberSkeletons = Array.apply(null, Array(3)).map((index) =>
		<li key={index} className='team--list'>
			<Skeleton className='team--list_image' />
			<div className='team--list_detail'>
				<Skeleton width={100} />
				<br />
				<Skeleton width={50} />
			</div>
		</li>
	)

	const memberList = (data, roleGroup) =>
		data.length !== 0 ?
			data.map((member) => memberListItem(member, roleGroup))
			:
			teamMemberSkeletons

	return (
		<main className='team'>
			<section className='team--header'>
				<h1>Our Diligent Team</h1>
			</section>
			<section >
				<ul className='team--body'>
						{ memberList(partnerData, 'Partner') }
						{ memberList(seniorData, 'Senior Associates') }
						{ memberList(associateData, 'Associates') }
						{ memberList(coreData, 'Core Team') }
				</ul>
			</section>
		</main>
	)
}

export default Team
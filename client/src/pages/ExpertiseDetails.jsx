import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-feather'
import { Link, useParams } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';
import Skeleton from 'react-loading-skeleton';

const ExpertiseDetails = () => {
	const { expertiseSlug } = useParams();

	const [details, setDetails] = useState({});
	const { urlFor } = useImageUrlBuilder();

	async function getExpertiseData() {
		const res = await client.fetch(
			`*[_type == 'expertise' && slug.current == '${expertiseSlug}']{
				practice,
				brief,
				'headOfDepName': head->fullName,
				'headOfDepPotrait': head->potrait.asset._ref,
				content
			}
			[0]`
		)
			.then((data) => {
				data["headOfDepPotrait"] = urlFor(data["headOfDepPotrait"]);
				setDetails(data);
			})
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getExpertiseData();
		console.log(details)
	}, [])

	const headerSkeleton =
		<section className='expertiseDetails--header'>
			<Skeleton width={200} />

			<h1 style={{ width: '36vw' }}><Skeleton /></h1>
			<div className='expertiseDetails--header_hod'>
				<Skeleton className='expertiseDetails--header_hod_potrait' circle={true} width={70} style={{ border: 'none' }} />
				<div>
					<Skeleton className='expertiseDetails--header_hod_name' width={200} />
					<Skeleton width={100} />
				</div>
			</div>
		</section>

	return (
		<main className='expertiseDetails'>
			{
				Object.keys(details).length !== 0 ?
					<section className='expertiseDetails--header'>
						<Link to={-1} className='expertiseDetails--header_backLink'>
							<ArrowLeft />
							<p>Home / Expertise /</p>
						</Link>
						<h1>{details["practice"]}</h1>
						<div className='expertiseDetails--header_hod'>
							<img src={details['headOfDepPotrait']} alt='Head Of department' className='expertiseDetails--header_hod_potrait' />
							<div>
								<p className='expertiseDetails--header_hod_name'><strong>{details['headOfDepName']}</strong></p>
								<p>Head of Department</p>
							</div>
						</div>
					</section>
					:
					headerSkeleton
			}
			<section className='expertiseDetails--body'>
				{
					Object.keys(details).length !== 0 ?
						<BlockContent blocks={details["content"]} className='text--long' />
						:
						<Skeleton count={10} className='text--long' />
				}
			</section>
		</main>
	)
}

export default ExpertiseDetails
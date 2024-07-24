import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-feather'
import { Link, useParams } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';

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

	return (
		<main className='expertiseDetails'>
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
			<section className='expertiseDetails--body'>
				{
					Object.keys(details).length !== 0 ?
						<div className='text--long'>
							<BlockContent blocks={details["content"]} />
						</div>
						: <p>Loading contents...</p>
				}

			</section>
		</main>
	)
}

export default ExpertiseDetails
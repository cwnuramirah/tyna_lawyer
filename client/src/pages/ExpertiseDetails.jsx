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
	}, [])

	return (
		<main className='expertiseDetails'>
			<section className='expertiseDetails--header'>
				<Link to={-1} className='expertiseDetails--header_backLink'>
					<ArrowLeft />
					<p><strong>Back to Expertise</strong></p>
				</Link>
				<h1>{details["practice"]}</h1>
			</section>
			<section className='expertiseDetails--body'>
				<div className='expertiseDetails--body_article'>
					<BlockContent blocks={details["content"]} />
				</div>
				<div className='expertiseDetails--body_info'>
					<figure className='expertiseDetails--body_info_image'>
						<img src={details['headOfDepPotrait']} alt='Head Of department' />
					</figure>
					<p className='expertiseDetails--body_info_name'>{details['headOfDepName']}</p>
				</div>
			</section>
		</main>
	)
}

export default ExpertiseDetails
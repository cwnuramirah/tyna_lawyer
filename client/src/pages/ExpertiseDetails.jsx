import React, { useEffect, useState } from 'react'
import { ArrowLeft, ChevronDown, Folder, Mail, Phone, User } from 'react-feather'
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
				<div className='expertiseDetails--body_sidebar'>
					<div className='expertiseDetails--body_sidebar_wrapper'>
						<div className='expertiseDetails--body_sidebar_header'>
							<div>
								<User />
								<h5>Practice Group Head</h5>
							</div>
							<ChevronDown />
						</div>
						<div className='expertiseDetails--body_info_content'>
							<img src={details['headOfDepPotrait']} alt='Head Of department' className='expertiseDetails--body_info_image' />
							<div>
								<p className='expertiseDetails--body_info_name'>{details['headOfDepName']}</p>
								<ul className='expertiseDetails--body_info_contact'>
									<li>
										<Mail />
										<a href='/#'>taufiqyong@tynco.com</a>
									</li>
									<li>
										<Phone />
										<a href='/#'>+6011-1789 2725</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='expertiseDetails--body_sidebar_wrapper'>
						<div className='expertiseDetails--body_sidebar_header'>
							<div>
								<Folder />
								<h5>Related Cases</h5>
							</div>
							<ChevronDown />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default ExpertiseDetails
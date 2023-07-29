import React, { useEffect, useState } from 'react';
import client from '../client';

const ExpertiseSection = () => {
	const [expertiseData, setExpertiseData] = useState([]);

	async function getExpertiseData() {
		// TODO: specify data in query
		const res = await client.fetch(
			`*[_type == 'expertise']{
				practice,
				slug,
				subareas,
				brief,
			}`
		)
			.then((data) => setExpertiseData(data))
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getExpertiseData();
	}, [])

	return (
		<section className='expertise'>
			<h1 className='expertise--header'>We provide this expert solutions for your legal matters.</h1>
			<ul>
				{
					expertiseData.map((expertise, index) => (
						<li key={expertise._id} className='expertise--list'>
							<h3 className='expertise--list_no'>{index + 1}.</h3>
							<h3 className='expertise--list_practice'>{expertise.practice}</h3>
							<ul className='expertise--list_tags'>
								{
									expertise.subareas.map((tags, index) => (
										<li key={index}>
											<a href='/#'>{tags}</a>
										</li>
									))
								}
							</ul>
							<div className='expertise--list_desc '>
								<p className='text--long'>{expertise.brief}</p>
								<a href={'/' + expertise.slug} className='btn btn-primary'>Learn More</a>
							</div>
						</li>
					))
				}
			</ul>
		</section>
	)
}

export default ExpertiseSection
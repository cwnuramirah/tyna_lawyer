import React from 'react';
import { useExpertiseData } from '../data/useExpertiseData';
import { Link } from 'react-router-dom';

const ExpertiseSection = () => {

	const { expertiseData } = useExpertiseData();

	return (
		<section className='expertise'>
			<h1 className='expertise--header'>We provide this expert solutions for your legal matters.</h1>
			<ul>
				{
					expertiseData.map((expertise, index) => (
						<li key={expertise.slug} className='expertise--list'>
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
								<Link to={'/expertise/' + expertise.slug} className='btn btn-primary'>Learn More</Link>
							</div>
						</li>
					))
				}
			</ul>
		</section>
	)
}

export default ExpertiseSection
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather'
import useData from '../hook/useData';

const ExpertiseSection = () => {
	const expertiseData = useData(
		`
			*[_type == 'expertise']{
				practice,
				'slug': slug.current,
			}
		`
	, [])

	return (
		<section className='practicearea'>
			<h1 className='practicearea--header'>We provide this expert solutions for your legal matters.</h1>
			<ul className='practicearea--list'>
				{

					expertiseData.map((expertise) => (
						<li key={expertise.slug} className='practicearea--item'>
							<Link to={'/expertise/' + expertise.slug}>
								<ArrowRight />
								<h4 className='practicearea--list_practice'>{expertise.practice}</h4>
							</Link>

						</li>
					))
				}
			</ul>
			<Link to='/expertise' className='btn btn-primary'>
				View Our Practice Areas
			</Link>
		</section>
	)
}

export default ExpertiseSection
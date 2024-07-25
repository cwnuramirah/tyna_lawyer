import React from 'react'
import { useExpertiseData } from '../data/useExpertiseData';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const Expertise = () => {
	const { expertiseData } = useExpertiseData();

	const expertiseItemSkeletons = Array.apply(null, Array(3)).map((index) =>
		<li key={index} className='expertise--list'>
			<h3 className='expertise--list_no'><Skeleton width={50} /></h3>
			<h3 className='expertise--list_practice'><Skeleton /></h3>
			<ul className='expertise--list_tags'>
				<li key='1'>
					<Skeleton className='expertise--list_tags_skeleton' width={120} />
				</li>
				<li key='2'>
					<Skeleton className='expertise--list_tags_skeleton' width={70} />
				</li>
				<li key='3'>
					<Skeleton className='expertise--list_tags_skeleton' width={140} />
				</li>
				<li key='4'>
					<Skeleton className='expertise--list_tags_skeleton' width={80} />
				</li>
				<li key='5'>
					<Skeleton className='expertise--list_tags_skeleton' width={150} />
				</li>
			</ul>
			<div className='expertise--list_desc '>
				<p className='text--long'><Skeleton count={3} /></p>
				<div className='btn'><Skeleton width={150} height={50} /></div>
			</div>
		</li>
	)

	return (
		<main>
			<section className='expertise'>
				<h1 className='expertise--header'>We provide this expert solutions for your legal matters.</h1>
				<ul>
					{
						expertiseData.length !== 0 ?
							expertiseData.map((expertise, index) => (
								<li key={index} className='expertise--list'>
									<h2 className='expertise--list_no'>{index + 1}.</h2>
									<h2 className='expertise--list_practice'>{expertise.practice}</h2>
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
							: expertiseItemSkeletons
					}
				</ul>
			</section>
		</main>
	)
}

export default Expertise
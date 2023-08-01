import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-feather'
import { Link, useParams } from 'react-router-dom'
import client from '../client';

const ExpertiseDetails = () => {
	const { expertiseSlug } = useParams();

	const [details, setDetails] = useState({});

	async function getExpertiseData() {
		const res = await client.fetch(
			`*[_type == 'expertise' && slug.current == '${expertiseSlug}']{
				practice,
				brief,
				'headOfDep': head->fullName
			}
			[0]`
		)
			.then((data) => setDetails(data))
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getExpertiseData();
	}, [])
	
	return (
		<main>
			<section>
				<Link to={-1}>
					<ArrowLeft />
					<p><strong>Back to Expertise</strong></p>
				</Link>
				<h1>{details["practice"]}</h1>
				<article>
					{details["brief"]}
				</article>

			</section>
		</main>
	)
}

export default ExpertiseDetails
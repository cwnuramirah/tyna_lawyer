import { useState, useEffect } from "react"
import client from "../client"

const statsData = [
	{
		'number': 24,
		'context': 'years',
		'counting': true,
		'label': 'since established',
	},
	{
		'number': 4,
		'context': '',
		'counting': false,
		'label': 'local branches',
	},
	{
		'number': 98,
		'context': '',
		'counting': true,
		'label': 'professional lawyers',
	},
	{
		'number': 300,
		'context': '',
		'counting': true,
		'label': 'satisfied clients',
	},
]

// const expertiseData = [
// 	{
// 		'id': '01',
// 		'practice': 'Corporate & Commercial',
// 		'description': 'From mergers and acquisitions to shareholders\' agreements, our commercially savvy legal team has the expertise to help you make informed decisions and protect your business interests.',
// 		'subpractice': [
// 			'Fundraising',
// 			'Employee Share Incentive Plans',
// 			'Shareholder\'s Agreement',
// 			'Setting Up Business In Malaysia',
// 			'Other Agreements (Drafting/Reviewing)'
// 		]
// 	},
// 	{
// 		'id': '02',
// 		'practice': 'Employment & Industrial Relations',
// 		'description': 'Whether you\'re an employer or employee, our skilled lawyers can provide practical advice and guidance on vast aspects of employment law, from compliance to termination, and help you navigate the legal complexities of industrial relations to achieve a positive outcome.',
// 		'subpractice': [
// 			'Fundraising',
// 			'Employee Share Incentive Plans',
// 			'Shareholder\'s Agreement',
// 			'Setting Up Business In Malaysia',
// 			'Other Agreements (Drafting/Reviewing)'
// 		]
// 	},
// 	{
// 		'id': '03',
// 		'practice': 'Dispute Resolution',
// 		'description': 'Our lawyers are experienced in alternative dispute resolution methods such as arbitration (both domestic and international) and can assist you in settlement negotiations.',
// 		'subpractice': [
// 			'Fundraising',
// 			'Employee Share Incentive Plans',
// 			'Shareholder\'s Agreement',
// 			'Setting Up Business In Malaysia',
// 			'Other Agreements (Drafting/Reviewing)'
// 		]
// 	},
// 	{
// 		'id': '04',
// 		'practice': 'Startups & VCs',
// 		'description': 'Our lawyers will guide startups and venture capitalists through the complex legal requirements of fundraising, shareholder agreements, and growth plans to set you up for long-term success.',
// 		'subpractice': [
// 			'Fundraising',
// 			'Employee Share Incentive Plans',
// 			'Shareholder\'s Agreement',
// 			'Setting Up Business In Malaysia',
// 			'Other Agreements (Drafting/Reviewing)'
// 		]
// 	},
// 	{
// 		'id': '05',
// 		'practice': 'Property & Tax',
// 		'description': 'Our lawyers are well-versed in property transactions and can help you navigate the complex legal landscape of buying, selling, and renting property. We can also help you save on RPGT and stamp duty wherever legally possible.',
// 		'subpractice': [
// 			'Fundraising',
// 			'Employee Share Incentive Plans',
// 			'Shareholder\'s Agreement',
// 			'Setting Up Business In Malaysia',
// 			'Other Agreements (Drafting/Reviewing)'
// 		]
// 	},
// ]

const teamData = [
	{
		'name': 'Taufiq Yong',
		'imgUrl': '/assets/team/team-01.jpg',
		'title': 'Corporate & Commercial, Startups and Venture Companies',
	},
	{
		'name': 'Malik Imtiyaz',
		'imgUrl': '/assets/team/team-02.jpg',
		'title': 'Employment Law & Dispute Resolution',
	},
	{
		'name': 'Logan Sabapathy',
		'imgUrl': '/assets/team/team-03.jpg',
		'title': 'Corporate & Commercial, Property & Tax',
	},
]

const awardData = [
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2019.png',
		'year': 2019,
	},
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2020-1.png',
		'year': 2020,
	},
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2020-2.png',
		'year': 2020,
	},
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2021.jpg',
		'year': 2021,
	},
	{
		'title': '2022',
		'imgUrl': '/assets/award/2022.png',
		'year': 2022,
	},
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2023-1.jpg',
		'year': 2023,
	},
	{
		'title': 'Taufiq Yong',
		'imgUrl': '/assets/award/2023-2.jpg',
		'year': 2023,
	},
]

const Home = () => {
	const [expertises, setExpertises] = useState([]);

	async function getExpertises() {
		// TODO: specify data in query
		const res = await client.fetch(
			`*[_type == 'expertise']`
		)
		.then((data) => setExpertises(data))
		.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getExpertises();
	}, [])

	const stats = statsData.map((item, index) => (
		<li key={index}>
			<div>
				<h1>{item['number']} {item['counting'] ? '+' : ''}</h1>
				<span>{item['context']}</span>
			</div>
			<p>{item['label']}</p>
		</li>
	))

	const expertise = expertises.map((item, index) => (
		<li key={item._id} className='expertise--list'>
			<h3 className='expertise--list_no'>{index + 1}.</h3>
			<h3 className='expertise--list_practice'>{item.practice}</h3>
			<ul className='expertise--list_tags'>
				{
					item.subareas.map((tags, index) => (
						<li>
							<a href={'/contact/' + tags} key={index}>{tags}</a>
						</li>
					))
				}
			</ul>
			<div className='expertise--list_desc '>
				<p className='text--long'>{item.brief}</p>
				<a href={'/' + item.practice} className='btn btn-primary'>Learn More</a>
			</div>
		</li>
	))

	const team = teamData.map((item, index) => (
		<li key={index} className='team--list'>
			<figure>
				<img src={item['imgUrl']} alt={item['name'] + ', ' + item['title'] + 'at Taufiq Yong & Associates'} />
				<figcaption><strong>{item['name']}</strong><br /> {item['title']}</figcaption>
			</figure>
		</li>
	))

	const award = awardData.map((item, index) => (
		<li key={index} className='awards--list'>
			<img src={item['imgUrl']} alt={item['title']} />
		</li>
	))


	return (

		<main>
			<section className='hero'>
				<div className='hero--header'>
					<h1>We are strategic legal partner for entrepreneurs</h1>
					<div className='hero--header_text'>

						<p>
							Providing optimum solution to our clients across the
							commercial spectrum both in Malaysia and throughout our region.
						</p>

						<a href='/'>Find Out More</a>
					</div>
				</div>
				<p className='hero--label'>Taufiq Yong<br />
					Managing Partner</p>
				<img src='/assets/tyna-leader.png' className='hero--img' alt='Taufiq Young, Managing Lawyer for Taufiq & Associates' />
			</section>
			<section className='stats'>
				<ul>
					{stats}
				</ul>
			</section>
			<section className='intro'>
				<h2>
					Taufiq & Associates is <u>a market-leading corporate law firm</u> with
					its impressive team of lawyers frequently engaged on cross-border and
					domestic M&A transactions.
				</h2>
				<p className='text--long'>
					Our vision is to provide our clientele with a solutions-oriented and integrated range
					of professional legal services. We believe that being forward-looking and dynamic is our strength, and our
					commitment has always been to attain the highest standards in quality, client service and ethics.
				</p>
			</section>

			<section className='expertise'>
				<h1 className='expertise--header'>We provide this expert solutions for your legal matters.</h1>
				<ul>
					{expertise}
				</ul>
			</section>
			<section className='awards'>
				<h1 className='awards--header'>Awards and recognitions</h1>
				<ul className='awards--body'>
					{award}
				</ul>
			</section>
			<section className='team'>
				<h1 className='team--header'>Years of experience and top knowledge combined.</h1>
				<ul className='team--body'>
					{team}
				</ul>
				<button className='btn btn-primary'>Meet Our Team</button>
			</section>
		</main>
	)
}

export default Home
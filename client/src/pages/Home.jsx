import React from 'react'

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
];

const expertiseData = [
	{
		'id': '01',
		'category': 'Corporate & Commercial',
		'description': 'From mergers and acquisitions to shareholders\' agreements, our commercially savvy legal team has the expertise to help you make informed decisions and protect your business interests.',
		'tags': [
			'Fundraising',
			'Employee Share Incentive Plans',
			'Shareholder\'s Agreement',
			'Setting Up Business In Malaysia',
			'Other Agreements (Drafting/Reviewing)'
		]
	},
	{
		'id': '02',
		'category': 'Employment & Industrial Relations',
		'description': 'Whether you\'re an employer or employee, our skilled lawyers can provide practical advice and guidance on vast aspects of employment law, from compliance to termination, and help you navigate the legal complexities of industrial relations to achieve a positive outcome.',
		'tags': [
			'Fundraising',
			'Employee Share Incentive Plans',
			'Shareholder\'s Agreement',
			'Setting Up Business In Malaysia',
			'Other Agreements (Drafting/Reviewing)'
		]
	},
	{
		'id': '03',
		'category': 'Dispute Resolution',
		'description': 'Our lawyers are experienced in alternative dispute resolution methods such as arbitration (both domestic and international) and can assist you in settlement negotiations.',
		'tags': [
			'Fundraising',
			'Employee Share Incentive Plans',
			'Shareholder\'s Agreement',
			'Setting Up Business In Malaysia',
			'Other Agreements (Drafting/Reviewing)'
		]
	},
	{
		'id': '04',
		'category': 'Startups & VCs',
		'description': 'Our lawyers will guide startups and venture capitalists through the complex legal requirements of fundraising, shareholder agreements, and growth plans to set you up for long-term success.',
		'tags': [
			'Fundraising',
			'Employee Share Incentive Plans',
			'Shareholder\'s Agreement',
			'Setting Up Business In Malaysia',
			'Other Agreements (Drafting/Reviewing)'
		]
	},
	{
		'id': '05',
		'category': 'Property & Tax',
		'description': 'Our lawyers are well-versed in property transactions and can help you navigate the complex legal landscape of buying, selling, and renting property. We can also help you save on RPGT and stamp duty wherever legally possible.',
		'tags': [
			'Fundraising',
			'Employee Share Incentive Plans',
			'Shareholder\'s Agreement',
			'Setting Up Business In Malaysia',
			'Other Agreements (Drafting/Reviewing)'
		]
	},
]

const Home = () => {

	const stats = statsData.map((item, index) => (
		<li key={index}>
			<div>
				<h1>{item['number']} {item['counting'] ? '+' : ''}</h1>
				<span>{item['context']}</span>
			</div>
			<p>{item['label']}</p>
		</li>
	));

	const expertise = expertiseData.map((item, index) => (
		<li key={index} className='expertise--list'>
			<h3 className='expertise--list_no'>{index + 1}.</h3>
			<h3 className='expertise--list_category'>{item['category']}</h3>
			<ul className='expertise--list_tags'>
				{
					item['tags'].map((item, index) => (
						<li>
							<a href={'/contact/' + item} key={index}>{item}</a>
						</li>
					))
				}
			</ul>
			<div className='expertise--list_desc '>

				<p className='text--long'>{item['description']}</p>
				<a href={'/' + item['category']} className='btn btn-primary'>Learn More</a>
			</div>
		</li>
	));

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
					Our vision is to provide our clientele with a solutions-oriented, comprehensive and integrated range
					of professional legal services and in the process, we strive relentlessly to surpass our exacting
					standards of service. We believe that being forward-looking and dynamic is our strength, and our
					commitment has always been to attain the highest standards in quality, client service and ethics.
				</p>
			</section>
			<section className='expertise'>
				<h1 className='expertise--header'>We provide this expert solutions for your legal matters.</h1>
				<ul>
					{expertise}
				</ul>
			</section>
			<section className='team'>
				<h1 className='team--header'>Years of experience and top knowledge</h1>
			</section>
		</main>
	)
}

export default Home
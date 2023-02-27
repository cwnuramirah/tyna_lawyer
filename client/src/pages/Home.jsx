import React from 'react'

const aboutBriefItem = [
	{
		'label': 'Our Story',
		'desc' : 'Taufiq & Associates is a Kuala Lumpur-based law firm that was formed in November 1999. As a result of significant growth achieved since its inception, our firm is now a large, broad-based commercial legal practice.\n\nThe firm is led by its founder and Managing Partner, Taufiq Yong who also spearheads the Corporate Department.'
	},
	{
		'label' : 'Our Vision',
		'desc'  : 'Our vision is to provide our clientele with a solutions-oriented, comprehensive and integrated range of professional legal services and in the process, we strive relentlessly to surpass our exacting standards of service.\n\nWe believe that being forward-looking and dynamic is our strength, and our commitment has always been to attain the highest standards in quality, client service and ethics.'
	}
]

const expertiseBriefItem = [
	{
		'id': '01',
		'title': 'Corporate & Commercial',
		'description': 'Our lawyers have a strong commercially driven mindset and advise both businesses and investors on shareholders’ agreements, terms of service, general contracts, employee stock options, personal data protection, mergers and acquisitions.',
	},
	{
		'id': '02',
		'title': 'Employment & Industrial Relations',
		'description': 'We advise both employers and employees on employment contracts, compliance with employment legislation, termination, management of employees, unfair dismissal claims and constructive dismissal issues. Our lawyers are able to represent you in the Industrial Court.',
	},
	{
		'id': '03',
		'title': 'Dispute Resolution',
		'description': 'We provide practical legal advice in disputes to protect your interests, and can represent you in litigation before the Malaysian Courts. Our lawyers are experienced in alternative dispute resolution methods such as arbitration (both domestic and international) and can assist you in settlement negotiations.',
	},
	{
		'id': '04',
		'title': 'Startups & VCs',
		'description': 'We help start-ups and high growth companies to set the right legal foundations. Fundraising is critical for many start-ups. We help founders structure their share capital, understand the practical implications and market practices of investment terms, and guide them in negotiating investment terms. Post-fundraising, we help founders navigate the legal aspects of their growth and expansion.',
	},
	{
		'id': '05',
		'title': 'Property & Tax',
		'description': 'We will ensure that your property transaction, whether you are renting, buying or selling, is handled by a lawyer (not just a clerk). You will be updated all the way. We will help you save on RPGT and stamp duty where legally possible. We will guide you through the process and local nuances of property transactions and rentals in Malaysia.',
	},
]

const Home = () => {

	const aboutusItems = aboutBriefItem.map((item, index) => <div key={index} className='about-items'>
		<h4>{item['label']}</h4>
		<p>{item['desc']}</p>
	</div>)

	const expertiseList = expertiseBriefItem.map((item, index) => <li key={index} className='expertise-list'>
		<div>
			<h3>{item['id']}.</h3></div>
		<div>
			<h3>{item['title']}</h3>
			<p>{item['description']}</p>
		</div>
	</li>)

	return (
		<main>
			<section className='vertical-margin-xl'>
			<div className='section--header'>
						<span className='section--header-label'>About Us</span>
						<h1>We strive to uphold the highest standards in service and ethics.</h1>
					</div>
					<div className='section--body'>
						{aboutusItems}
					</div>
			</section>
			<section className='vertical-margin-xl'>
					<div className='section--header'>
						<span className='section--header-label'>Expertise</span>
						<h1>We provide this expert solutions for your legal matters.</h1>
					</div>
					<div className='section--body'>
						<ul>{expertiseList}</ul>
					</div>
			</section>
		</main>
	)
}

export default Home
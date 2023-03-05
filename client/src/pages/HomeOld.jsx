import React from 'react'
import { ArrowUpRight } from 'react-feather';

// const expertiseBriefItem = [
// 	{
// 		'id': '01',
// 		'title': 'Corporate & Commercial',
// 		'description': 'From mergers and acquisitions to shareholders\' agreements, our commercially savvy legal team has the expertise to help you make informed decisions and protect your business interests.',
// 	},
// 	{
// 		'id': '02',
// 		'title': 'Employment & Industrial Relations',
// 		'description': 'At our law firm, we believe that a happy and productive workforce is the key to success. Our skilled lawyers can help you navigate the often-complex world of employment law, whether you\'re an employer or an employee.',
// 	},
// 	{
// 		'id': '03',
// 		'title': 'Dispute Resolution',
// 		'description': 'Our lawyers are experienced in alternative dispute resolution methods such as arbitration (both domestic and international) and can assist you in settlement negotiations.',
// 	},
// 	{
// 		'id': '04',
// 		'title': 'Startups & VCs',
// 		'description': 'Our lawyers will guide startups and venture capitalists through the complex legal requirements of fundraising, shareholder agreements, and growth plans to set you up for long-term success.',
// 	},
// 	{
// 		'id': '05',
// 		'title': 'Property & Tax',
// 		'description': 'Our lawyers are well-versed in property transactions and can help you navigate the complex legal landscape of buying, selling, and renting property. We can also help you save on RPGT and stamp duty wherever legally possible.',
// 	},
// ]

const HomeOld = () => {
	// const expertiseList = expertiseBriefItem.map((item, index) =>
	// 	<li key={index} className='expertise-list'>
	// 		<div>
	// 			<h3>{item['id']}.</h3></div>
	// 		<div>
	// 			<h3>{item['title']}</h3>
	// 			<p>{item['description']}</p>
	// 		</div>
	// 	</li>
	// )

	return (
		// <main>
		// 	<section>
		// 		{/* HERO */}
		// 		<h1>We are award-winning, market-leading corporate law firm known to corporates and business leader</h1>
		// 	</section>
		// 	<section>
		// 		<h1>INTEGRITY</h1>
		// 		<h1>EXCELLENCE</h1>
		// 		<h1>INNOVATION</h1>
		// 	</section>
		// 	<section>
		// 		<div>
		// 			<h2>We provide optimum solution to our clients across the commercial spectrum both in Malaysia and throughout our region.</h2>
		// 			<p>
		// 				Taufiq & Associates is a Kuala Lumpur-based law firm that was formed in November 1999.
		// 				As a result of significant growth achieved since its inception, our firm is now a large,
		// 				broad-based commercial legal practice. The firm is led by its founder and Managing Partner,
		// 				Taufiq Yong who also spearheads the Corporate Department.
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<h2>We strive to uphold the highest standards in service and ethics.</h2>
		// 			<p>
		// 				Our vision is to provide our clientele with a solutions-oriented, comprehensive and integrated range
		// 				of professional legal services and in the process, we strive relentlessly to surpass our exacting
		// 				standards of service. We believe that being forward-looking and dynamic is our strength, and our
		// 				commitment has always been to attain the highest standards in quality, client service and ethics.
		// 			</p>
		// 		</div>
		// 	</section>
		// 	<section className='section'>
		// 		<span className='section--label'>Expertise</span>
		// 		<div className='section--body'>
		// 			<h1>We provide this expert solutions for your legal matters.</h1>
		// 			<div>
		// 				<ul>{expertiseList}</ul>
		// 			</div>
		// 		</div>
		// 	</section>
		// </main>
		<main>

			<h1>We provide this expert solutions for your legal matters.</h1>
			<btn href='#' className='btn btn--primary'>
				<span className='btn__text'>Read more</span>
				<i className='btn__icon btn__icon--append'><ArrowUpRight /></i>
			</btn>
		</main>
	)
}

export default HomeOld
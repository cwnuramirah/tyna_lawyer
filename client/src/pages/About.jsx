import React, { useEffect, useState } from 'react';
import { Check } from 'react-feather';
// import client from '../client';
// import BlockContent from '@sanity/block-content-to-react';

const About = () => {
	// const [content, setContent] = useState([]);

	// async function getContent() {
	// 	const res = await client.fetch(
	// 		`
	// 			*[_type == 'about']{
	// 				introduction
	// 			}[0]
	// 		`
	// 	)
	// 		.then((data) => setContent(data))
	// 		.catch((err) => console.log(err));

	// 	return res;
	// };

	// useEffect(() => {
	// 	getContent();
	// }, [])

	return (
		<main className='about'>
			<header>
				<h1>About Us</h1>
			</header>
			<section>
				<h4 className='text--long'>
					Taufiq Yong & Associates is a law firm practising employment law, corporate and
					commercial advisory and dispute resolution. Since our inception in 2014, we have
					grown exponentially and have served thousands of satisfied clients worldwide.
				</h4>
			</section>
			<section className='about--principles'>
				<div className='about--principles_header'>
					<h2>Our Central Principles</h2>
				</div>

				<ul>
					<li>
						<h3><Check /></h3>
						<div>
							<h3 className=''>Client-Centric Solutions</h3>
							<p className='text--long'>
								Beyond expertise, we're committed to understanding your unique needs and crafting
								tailored solutions. With clear communication and proactive strategies, we ensure your
								peace of mind every step of the way.
							</p>
						</div>
					</li>
					<li>
						<h3><Check /></h3>
						<div>
							<h3 className=''>Uncompromising Integrity.</h3>
							<p className='text--long'>
								At Taufiq Yong & Associates, integrity is not just a goal—it’s our foundation.
								We uphold the highest ethical standards, ensuring transparent, trustworthy, and
								accountable legal services for every client. Choose a firm that prioritizes your
								trust and delivers results with unwavering integrity.
							</p>
						</div>
					</li>
					<li>
						<h3><Check /></h3>
						<div>
							<h3 className=''>Technology-Driven Approach.</h3>
							<p className='text--long'>
								To stay agile in an increasingly hectic world, we manage all our
								documents and projects using leading-edge technology. Our commitment
								to bringing value to our clients is evident in how we constantly
								innovate to achieve greater productivity. We pass on these benefits
								to our clients who are assured to receive prompt and efficient services, always.</p>
						</div>

					</li>
				</ul>
			</section>
			<section>
				<h2>Dedicated to Serve Our Community</h2>
				<p>
					We are passionate about educating the public and making legal knowledge accessible to
					everyone. From publishing over hundreds of free legal articles on our website to producing
					a 2-minute video series, #LegalFlix, our initiatives have reached over a million viewers
					globally. We have also partnered with Lexis Nexis to set up a COVID-19 resource hub for
					employment law issues during the pandemic.
				</p>
			</section>
			{/* <section>
				<BlockContent blocks={content["introduction"]} />
			</section> */}
		</main>
	)
}

export default About
import { Link } from "react-router-dom"
import AwardSection from "./AwardSection"
import ExpertiseSection from "./ExpertiseSection"
import TeamSection from "./TeamSection"
import { ArrowRight } from "react-feather"

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

const Home = () => {

	const stats = statsData.map((item, index) => (
		<li key={index}>
			<div>
				<h1>{item['number']} {item['counting'] ? '+' : ''}</h1>
				<span>{item['context']}</span>
			</div>
			<p>{item['label']}</p>
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

						<Link to='/contact' className='hero--header_text_link'>
							<ArrowRight />
							<strong>Discuss With Us Today</strong>
						</Link>
					</div>
				</div>
				<p className='hero--label'><strong>Taufiq Yong</strong><br />
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
				<img src='/assets/jumbo-img.jpg' alt='deco' />
				<p className='text--long'>
					Our vision is to provide our clientele with a solutions-oriented and integrated range
					of professional legal services. We believe that being forward-looking and dynamic is our strength, and our
					commitment has always been to attain the highest standards in quality, client service and ethics.
				</p>
			</section>
			<ExpertiseSection />
			<TeamSection />
			<AwardSection />
		</main>
	)
}

export default Home
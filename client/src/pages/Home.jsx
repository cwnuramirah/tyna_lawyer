import ExpertiseSection from "./ExpertiseSection"
import TeamSection from "./TeamSection"

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

	const stats = statsData.map((item, index) => (
		<li key={index}>
			<div>
				<h1>{item['number']} {item['counting'] ? '+' : ''}</h1>
				<span>{item['context']}</span>
			</div>
			<p>{item['label']}</p>
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
			<ExpertiseSection />
			<section className='awards'>
				<h1 className='awards--header'>Awards and recognitions</h1>
				<ul className='awards--body'>
					{award}
				</ul>
			</section>
			<TeamSection />
		</main>
	)
}

export default Home
import React from 'react';
import { useAboutContent } from '../data/useAboutContent';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';

const About = () => {
	const { content } = useAboutContent();
	const { urlFor } = useImageUrlBuilder();

	function getGridTemplate(layout) {
		let gridTemplate = layout.replace(/-/g, `""`)
		gridTemplate = gridTemplate.replace(/X/g, ".")
		gridTemplate = `"`.concat(gridTemplate);
		gridTemplate = gridTemplate.concat(`"`);
		return gridTemplate;
	}

	const about = content.map((section, index) => {
		const classname = section.title.replace(/\s/g, "-");
		const gridTemplate = getGridTemplate(section.layout);
		const sectionStyle = {
			display: 'grid',
			gridTemplateAreas: gridTemplate,
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			gap: '2vw'
		}

		return <section key={index} className={classname} style={sectionStyle}>
			<h2 style={{alignSelf: section.image !== null ? 'end' : 'start'}}>{section.heading}</h2>
			<p style={{alignSelf: 'start'}}>{section.text}</p>
			{
				section.image !== null &&
				<div className='section_image'>
					<img src={urlFor(section.image)} alt={'Taufiq Yong & Associates | ' + section.title} />
				</div>
			}
		</section>
	})

	return (
		<main className='about'>
			{
				content.length !== 0 ?
					about
					: <section>
						<p>Loading our story...</p>
					</section>
			}
		</main>
	)
}

export default About
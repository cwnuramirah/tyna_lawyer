import React from 'react';
import { useImageUrlBuilder } from '../hook/useImageUrlBuilder';
import ChangeDocumentTitle from '../hook/changeDocumentTitle';
import useData from '../hook/useData';

const About = () => {
	const content = useData(
		`
			*[_type == 'pageBuilder'] {
				'content': content[]->{
					title, 
					layout, 
					heading,
					text,
					image,
				}
			}[0]
		`
		, {})

	const { urlFor } = useImageUrlBuilder();

	ChangeDocumentTitle('About Us')

	function getGridTemplate(layout) {
		let gridTemplate = layout.replace(/-/g, `""`)
		gridTemplate = gridTemplate.replace(/X/g, ".")
		gridTemplate = `"`.concat(gridTemplate);
		gridTemplate = gridTemplate.concat(`"`);
		return gridTemplate;
	}

	const about = Object.keys(content).length !== 0 && content['content'].map((section, index) => {
		const classname = section.title.replace(/\s/g, "-");
		const gridTemplate = getGridTemplate(section.layout);
		const sectionStyle = {
			gridTemplateAreas: gridTemplate,
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			gap: '2vw'
		}

		return <section key={index} className={classname} style={sectionStyle}>
			<h2 style={{ alignSelf: section.image !== null ? 'end' : 'start' }}>{section.heading}</h2>
			<p style={{ alignSelf: 'start' }}>{section.text}</p>
			{
				section.image !== null &&
				<div className='section_image'>
					<img src={urlFor(section.image)} alt={'Taufiq Yong & Associates | ' + section.title}/>
				</div>
			}
		</section>
	})

	return (
		<main className='about'>
			{
				Object.keys(content).length !== 0 ?
					about
					:
					<section>
						<p>Loading our story...</p>
					</section>
			}
		</main>
	)
}

export default About
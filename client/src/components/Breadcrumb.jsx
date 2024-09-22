import React from 'react'
import { NavLink } from 'react-router-dom';

const Breadcrumb = ({ crumbs }) => {
	const handleClick = (i) => {
		if (crumbs.length - 1 === i){
			return event => event.preventDefault();
		}
	}
	return (
		<ul className='breadcrumb'>
			<li className='text--xs'><NavLink to="/">Home</NavLink></li>
			{
				crumbs.map((path, i) =>
					<li key={i} className='text--xs'>
						/ <NavLink to={path.link} onClick={handleClick(i)}> {path.name}</NavLink>
					</li>)
			}
		</ul>
	)
}

export default Breadcrumb
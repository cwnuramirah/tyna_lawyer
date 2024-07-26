import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const [expanded, setExpanded] = useState(false)
	const onToggle = () => setExpanded(!expanded)

	//active page indicator using NavLink function
	const activeLink = ({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link";

	return (
		<header className="navbar">
			<div className="brand">
				<a href="/">🧩 Tetuan Taufiq</a>
			</div>
			<nav>
				<div className={expanded ? "nav-menu" : ""}>
					<button id="nav-btn" onClick={onToggle}>M</button>
				</div>
				<ul className={expanded ? "nav-list-expanded" : "nav-list"}>
					<li><NavLink to="/about" className={activeLink}>About</NavLink></li>
					<li><NavLink to="/expertise" className={activeLink}>Expertise</NavLink></li>
					<li><NavLink to="/team" className={activeLink}>Team</NavLink></li>
					<li><NavLink to="/articles" className={activeLink}>Articles</NavLink></li>
					<li><button className='btn btn-primary'>Contact Us</button></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
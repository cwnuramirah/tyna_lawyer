import React from 'react'
import { useState } from 'react'

const Navbar = () => {
	const [expanded, setExpanded] = useState(false)
	const onToggle = () => setExpanded(!expanded)

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
					<li><a href="/">About</a></li>
					<li><a href="/expertise">Expertise</a></li>
					<li><a href="/">Team</a></li>
					<li><a href="/">Articles</a></li>
					<li><button className='btn btn-primary'>Contact Us</button></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
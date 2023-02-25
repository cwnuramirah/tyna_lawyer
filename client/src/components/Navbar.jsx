import React from 'react'
import { useState } from 'react'

const Navbar = () => {
	const [expanded, setExpanded] = useState(false)
	const onToggle = () => setExpanded(!expanded)

	return (
		<section className="navbar">
			<div className="brand">
				<a href="/">🧩 Tetuan Taufiq</a>
			</div>
			<nav>
				<div className={expanded ? "nav-menu" : ""}>
					<button id="nav-btn" onClick={onToggle}>M</button>
				</div>
				<ul className={expanded ? "nav-list-expanded" : "nav-list"}>
					<li><a href="/">About</a></li>
					<li>
						<a href="/expertise">Expertise</a>
						<ul className="nav-dropdown">
							<li><a href="/expertise/web-design">Web Design</a></li>
							<li><a href="/expertise/web-dev">Web Development</a></li>
							<li><a href="/expertise/graphic-design">Graphic Design</a></li>
						</ul>
					</li>
					<li><a href="/">Team</a></li>
					<li><a href="/">Articles</a></li>
					<li><button className='btn btn-primary'>Contact Us</button></li>
				</ul>
			</nav>
		</section>
	)
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'react-feather'

const Navbar = () => {
	const [expanded, setExpanded] = useState(false)
	const onToggleNavMenu = () => setExpanded(!expanded);
	function onClickNavList() {
		if(expanded) {
			setExpanded(!expanded)
		}
	}

	//active page indicator using NavLink function
	const activeLink = ({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link";

	return (
		<header className="navbar">
			<div className="logo">
				<a href="/">
					<img src='/assets/ty-signature-trans.png' alt='Taufiq Yong & Associates logo' />
				</a>
			</div>
			<nav>
				<div className={expanded ? "nav-menu" : ""}>
					<button id="nav-btn" onClick={onToggleNavMenu}>
						{expanded ? <X /> : <Menu />}
					</button>
				</div>
				<ul className={expanded ? "nav-list-expanded" : "nav-list"}>
					{expanded && <li><NavLink to="/" className={activeLink} onClick={onClickNavList}>Home</NavLink></li>}
					<li><NavLink to="/about" className={activeLink} onClick={onClickNavList}>About</NavLink></li>
					<li><NavLink to="/expertise" className={activeLink} onClick={onClickNavList}>Expertise</NavLink></li>
					<li><NavLink to="/team" className={activeLink} onClick={onClickNavList}>Team</NavLink></li>
					<li><NavLink to="/blog" className={activeLink} onClick={onClickNavList}>Articles</NavLink></li>
					<li><NavLink to="/contact" className='btn btn-primary' onClick={onClickNavList}>Contact Us</NavLink></li>
					{expanded && <li>
						<img src='/assets/ty-signature-trans.png' alt='Taufiq Yong & Associates logo' style={{opacity: '0.1'}}/>
					</li>}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
import React from 'react'
import { Link } from 'gatsby'
import "./navbar.scss";

const Navbar = () => (
	<nav className="links">
		<ul>
			<li>
				<Link to="/tech">Tech</Link>
			</li>
			<li>
				<Link to="/design">Design</Link>
			</li>
			<li>
				<Link to="/finance">Finance</Link>
			</li>
			<li>
				<Link to="/life">Life</Link>
			</li>
			{/* <li>
				<Link to="/projects">Projects</Link>
			</li> */}
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
	</nav>
)

export default Navbar

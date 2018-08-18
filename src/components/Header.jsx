import React from 'react'
import { Link }from 'gatsby'
import Navbar from './Navbar'

const Header = () => {
	return (
		<header id="header">
			<h1>
				<Link to="/">LJournal</Link>
			</h1>
			<Navbar />
			<nav className="main">
				<ul>
					<li className="search">
						<a className="fa-search" href="#search">
							Search
						</a>
						<form id="search" method="get" action="#">
							<input type="text" name="query" placeholder="Search" />
						</form>
					</li>
					<li className="menu">
						<a className="fa-bars" href="#menu">
							Menu
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

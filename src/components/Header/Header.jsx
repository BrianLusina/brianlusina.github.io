import React from 'react'
import { Link }from 'gatsby'
import Navbar from '../navbar/Navbar'
// import Search from '../search/Search';
// import "./header.scss";

const Header = () => {
	return (
		<header id="header">
			<h1>
				<Link to="/">LJournal</Link>
			</h1>
			<Navbar />
			{/* TODO: include search and menu */}
			{/* <nav className="main">
				<ul>
					<li className="header-search">
						<Search className='visible'/>
					</li>
					<li className="menu">
						<a className="fa-bars" href="#menu">
							Menu
						</a>
					</li>
				</ul>
			</nav> */}
		</header>
	)
}

export default Header

import React from 'react'
import logo from '../assets/images/logo.jpg'

const Intro = () => (
	<section id="intro">
		<a href="#" className="logo">
			<img src={logo} alt="LJournal" />
		</a>
		<header>
			<h2>LJournal</h2>
			<p>
				A simple Journal by <a href="https://github.com/BrianLusina">L</a>
			</p>
		</header>
	</section>
)

export default Intro

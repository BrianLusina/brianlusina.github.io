import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { string } from 'prop-types';

const pageDescription = (pageDesc) => {
	if(pageDesc){
		return <p>{pageDesc}</p>
	}
	return <p>A simple Journal by <a href="https://github.com/BrianLusina">L</a></p>
}

const Intro = ({ pageDesc }) => (
	<section id="intro">
		<a href="#" className="logo">
			<img src={logo} alt="LJournal" />
		</a>
		<header>
			<h2>LJournal</h2>
			{
				pageDescription(pageDesc)
			}
		</header>
	</section>
)

Intro.propTypes = {
	pageDesc: string,
}

Intro.defaultProps = {
	pageDesc: null
}

export default Intro

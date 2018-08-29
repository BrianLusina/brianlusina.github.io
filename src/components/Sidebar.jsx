import React from 'react'
import { arrayOf, object, string, shape } from 'prop-types'
import Footer from './Footer'
import Contact from './Contact'
import Intro from './Intro'
import MiniPosts from './posts/MiniPosts'
import AboutBlurb from './AboutBlurb/AboutBlurb'

const Sidebar = ({ miniPosts, about, socialLinks, pageDesc, contact : { town, country, email }}) => (
	<section id="sidebar">
		<Intro pageDesc={pageDesc}/>
		<MiniPosts posts={miniPosts} />
		<AboutBlurb about={about}/>
		<Contact town={town} country={country} email={email}/>
		<Footer socialLinks={socialLinks}/>
	</section>
)

Sidebar.defaultProps = {
	pageDesc: null,
}

Sidebar.propTypes = {
	miniPosts: arrayOf(object),
	about: string,
	contact: shape({
		town: string,
		country: string,
		email: string	
	}),
	socialLinks: shape({
		name: string,
		link: string
	}),
	pageDesc: string,
}

export default Sidebar

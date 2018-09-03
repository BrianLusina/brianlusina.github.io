import React from 'react'
import { arrayOf, object, string, shape } from 'prop-types'
import Footer from './Footer/Footer'
import Contact from './contact/Contact'
import Intro from './Intro/Intro'
import MiniPosts from './posts/MiniPosts'
import AboutBlurb from './AboutBlurb/AboutBlurb'

const Sidebar = ({ miniPosts, about, socialLinks, pageDesc, contact : { town, country, email, emailAlias }}) => (
	<section id="sidebar">
		<Intro pageDesc={pageDesc}/>
		<MiniPosts posts={miniPosts} />
		<AboutBlurb about={about}/>
		<Contact town={town} country={country} email={email} emailAlias={emailAlias}/>
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
		email: string,
		emailAlias: string,
	}),
	socialLinks: shape({
		name: string,
		link: string
	}),
	pageDesc: string,
}

export default Sidebar

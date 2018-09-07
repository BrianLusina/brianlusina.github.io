import React from 'react'
import { arrayOf, object, string, shape } from 'prop-types'
import Footer from './Footer/Footer'
import Contact from './contact/Contact'
import Intro from './Intro/Intro'
import MiniPosts from './posts/MiniPosts'
import AboutBlurb from './AboutBlurb/AboutBlurb'

const Sidebar = ({ miniPosts, tag, about, socialLinks, pageDesc, contact : { town, country, email, emailAlias }}) => (
	<section id="sidebar">
		<Intro pageDesc={pageDesc}/>
		<MiniPosts posts={miniPosts} currentTag={tag}/>
		<AboutBlurb about={about}/>
		<Contact town={town} country={country} email={email} emailAlias={emailAlias}/>
		<Footer socialLinks={socialLinks}/>
	</section>
)

Sidebar.defaultProps = {
	pageDesc: null,
	tag: null
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
	socialLinks: arrayOf(shape({
		name: string,
		link: string
	})),
	pageDesc: string,
	tag: string,
}

export default Sidebar

import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import Intro from './Intro'
import MiniPosts from './posts/MiniPosts'
import AboutBlurb from './AboutBlurb'
import { arrayOf, object } from 'prop-types'

const Sidebar = ({ miniPosts }) => (
	<section id="sidebar">
		<Intro />
		<MiniPosts posts={miniPosts} />
		<AboutBlurb />
		<Contact />
		<Footer />
	</section>
)

Sidebar.propTypes = {
	miniPosts: arrayOf(object),
}

export default Sidebar

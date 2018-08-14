import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import Intro from './Intro'
import MiniPosts from './posts/MiniPosts'
import AboutBlurb from './AboutBlurb'

const Sidebar = () => (
	<section id="sidebar">
		<Intro />
		<MiniPosts />
		<AboutBlurb />
		<Contact />
		<Footer />
	</section>
)

export default Sidebar

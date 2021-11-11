import React from 'react'
import { oneOfType, array, object, bool, shape, string, arrayOf } from "prop-types";
import Helmet from 'react-helmet'
import Header from '@components/header';
import Menu from '@components/menu/Menu';
import Sidebar from '@components/Sidebar';
import favicon from '@assets/icons/favicon.png'


const LayoutWrapper = (
	{ 
		children, displaySidebar, siteTitle, page, tag, 
		about, socialLinks, town, country, email, emailAlias,
		miniPosts,
	}) => {

	const { title, description } = page;
	return (
        <>
            <Helmet
            	title={title ? `${title} | ${siteTitle}` : siteTitle}
            	meta={[
            		{ name: 'description', content: 'LJournal, a simple blog' },
            		{
            			name: 'keywords',
            			content: 'data, Lusina, Brian Lusina, code, bugs, algorithms',
            		},
            	]}
            	link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
            />
            <div id="wrapper">
            	<Header />
            	<Menu />
            	<div id="main">{children}</div>
            	{ 
            		displaySidebar && 
                    <Sidebar 
                    	miniPosts={miniPosts}
                    	about={about} 
                    	socialLinks={socialLinks}
                    	contact={{
                    		town, 
                    		country,
                    		email,
                    		emailAlias,
                    	}}
                    	pageDesc={description}
                    	tag={tag}
                    />
            	}
            </div>
        </>
	)
}

LayoutWrapper.defaultProps = {
	displaySidebar: true,
	page: {
		title: null,
		description: null
	},
	tag: null
}


LayoutWrapper.propTypes = {
	children: oneOfType([object, array]),
	siteTitle: string,
	displaySidebar: bool,
	page: shape({
		title: string,
		description: string,
	}),
	tag: string,
	town: string, 
	country: string,
	email: string,
	emailAlias: string,
	about: string,
	socialLinks: arrayOf(shape({
		name: string,
		link: string
	})),
	miniPosts: arrayOf(object)
}

export default LayoutWrapper;
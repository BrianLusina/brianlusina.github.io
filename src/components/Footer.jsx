import React from 'react'
import SocialIcon from './SocialIcon'

const socialLinks = [
	{
		name: 'Twitter',
		link: 'https://twitter.com/BrianLusina',
		iconClass: 'icon fa-twitter',
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/brianlusina',
		iconClass: 'icon fa-facebook',
	},
	{
		name: 'Medium',
		link: 'https://medium.com/@lusinabrian',
		iconClass: 'icon fa-medium',
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/brianlusina/',
		iconClass: 'icon fa-linkedin',
	},
	{
		name: 'Github',
		link: 'https://github.com/BrianLusina',
		iconClass: 'icon fa-github',
	},
]

/**
 * Footer stateless component
 */
const Footer = () => (
	<section id="footer">
		<ul className="icons">
			{socialLinks.map(({ iconClass, link, name }, index) => {
				return (
					<SocialIcon
						key={index}
						socialIconClass={iconClass}
						socialLink={link}
						socialName={name}
					/>
				)
			})}
		</ul>

		<p className="copyright">
			&copy; LJournal. All rights reserved.
			<br />
			Images <a href="https://unsplash.com">Unsplash</a>.
			<br />
			Design: <a href="https://brianlusina.surge.sh">TheLusina</a>.
		</p>
	</section>
)

export default Footer

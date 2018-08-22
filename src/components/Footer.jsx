import React from 'react'
import { bool, string, arrayOf, shape } from "prop-types";
import SocialIcon from './SocialIcon'

/**
 * Footer stateless component
 */
const Footer = ({ hasCopyright, socialLinks }) => (
	<section id="footer">
		<ul className="icons">
			{
				socialLinks.map(({ link, name }, index) => {
					return (
						<SocialIcon
							key={index}
							socialIconClass={`icon fa-${name}`}
							socialLink={link}
							socialName={name}
						/>
					)
				})
			}
		</ul>

		{ hasCopyright && 
			<p className="copyright">
				&copy; LJournal. All rights reserved.
				<br />
				Images <a href="https://unsplash.com">Unsplash</a>.
				<br />
				Design: <a href="https://brianlusina.surge.sh">TheLusina</a>.
			</p>
		}
	</section>
)

Footer.defaultProps = {
	hasCopyright: true
}

Footer.propTypes = {
	hasCopyright: bool,
	socialLinks: arrayOf(shape({
		name: string,
		link: string,
	}))
}

export default Footer

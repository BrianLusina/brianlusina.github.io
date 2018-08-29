import React from 'react'
import { string } from 'prop-types'

/**
 * SocialIcon Component to display a single social icon
 * @param {Object} param destructured prop types received by SocialIcon component
 */
const SocialIcon = ({ socialIconClass, socialLink, socialName }) => {
	return (
		<li>
			<a
				href={socialLink}
				className={socialIconClass}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="label">{socialName}</span>
			</a>
		</li>
	)
}

/**
 * Social icon prop Types validation.
 * @property socialIconClass which is the style of the icon class to use
 * @property socailLink Social Link for the hyper reference to the actual social link
 * @property socialName Social site name
 */
SocialIcon.propTypes = {
	socialIconClass: string,
	socialLink: string,
	socialName: string,
}

export default SocialIcon

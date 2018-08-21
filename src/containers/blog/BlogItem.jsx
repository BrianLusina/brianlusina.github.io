/**
 * A single Blog item to display
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * Blog Item stateless component
 * @param {Object} param desctructured Props passed down from Blog Container
 */
const BlogItem = ({ link, imgSrc, imgAlt, title, excerpt }) => {
	return (
		<article>
			<a href={link} className="image">
				<img src={imgSrc} alt={imgAlt} />
			</a>
			<h3>{title}</h3>
			<p>{excerpt}</p>
			<ul className="actions">
				<li>
					<Link to={link} className="button">
						More
					</Link>
				</li>
			</ul>
		</article>
	)
}

/**
 * Prop Validation
 */
BlogItem.propTypes = {
	link: PropTypes.string,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string,
}

export default BlogItem

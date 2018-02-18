/**
 * A single Blog item to display
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Blog Item stateless component
 * @param {Object} param desctructured Props passed down from Blog Container
 */
const BlogItem = ({link, imgSrc, imgAlt, title, excerpt}) => {
	return (
		<article>
			<a href={link} className="image">
				<img src={imgSrc} alt={imgAlt} /></a>
			<h3>{title}</h3>
			<p>{excerpt}</p>
			<ul className="actions">
				<li>
					<a href={link} className="button">More</a>
				</li>
			</ul>
		</article>
	)
}

/**
 * Prop Validation
 */
BlogItem.propTypes = {

};

export default BlogItem;

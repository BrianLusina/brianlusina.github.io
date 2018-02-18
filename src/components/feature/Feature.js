import React from 'react';
import placeholderImg from "./placeholder.jpg";
import PropTypes from "prop-types";
import Link from "gatsby-link";

/**
 * Feature stateless component, Will contain the feature article or the most recent article written
 * @param {String} featureTitle Feature title of the blog article
 * @param {String} subtitle Subtitle of the article to be displayed
 * @param {String} shortDescription Short description of the article
 * @param {String} postLink Link to the actual blog post
 * @returns {Object} React Element JSX element to render
 */
const Feature = ({ featureTitle, subtitle, shortDescription, postId, postLink }) => {
	return (
		<section id="banner">
			<div className="content">
				<header>
					<h1>{featureTitle}</h1>
					<p>{subtitle}</p>
				</header>
				<p id="short-desc">{shortDescription}</p>
				<ul className="actions">
					<li>
						<Link to={postLink} className="button big">Learn More</Link>
					</li>
				</ul>
			</div>
			<span className="image object">
				<img src={placeholderImg} alt=""/>
			</span>
		</section>
	);
};

/**
 * Prop validation
 */
Feature.propTypes = {
	featureTitle: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	postId: PropTypes.string,
	shortDescription: PropTypes.string.isRequired,
	postLink: PropTypes.string.isRequired,
};

export default Feature;

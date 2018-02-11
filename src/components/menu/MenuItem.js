import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

/**
 * Menu item component. Displays a single Menu Item component
 * @param {Object} param destructured object declaration of proptypes passed in from parent
 */
const MenuItem = ({ menuLink, menuTitle }) => {
	return (
		<li>
			<Link to={menuLink}>{menuTitle}</Link>
		</li>
	);
};

/**
 * Prop validation. This menu item requires pageLink and the Page title to display a menu item selection
 */
MenuItem.propTypes = {
	menuLink: PropTypes.string.isRequired,
	menuTitle: PropTypes.string.isRequired
};

export default MenuItem;

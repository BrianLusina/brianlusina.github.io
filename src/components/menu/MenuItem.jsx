import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'

/**
 * Menu item component. Displays a single Menu Item component
 * @param {Object} param destructured object declaration of proptypes passed in from parent
 */
const MenuItem = ({ link, title, desc }) => {
	return (
		<li>
			<Link to={link}>
				<h3>{title}</h3>
				<p>{desc}</p>
			</Link>
		</li>
	)
}

/**
 * Prop validation. This menu item requires pageLink and the Page title to display a menu item selection
 */
MenuItem.propTypes = {
	link: string.isRequired,
	title: string.isRequired,
	desc: string,
}

export default MenuItem

import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

/**
 * Menu stateless component
 */
const Menu = () => {
	function createMenuItems() {
		const items = [
			{
				link: "/posts/",
				title: "Posts"
			},
			{
				link: "/authors/",
				title: "Authors"
			}
		];

		return items.map((item, index) => {
			return (
				<MenuItem key={index} menuLink={item.link} menuTitle={item.title} />
			);
		});
	}

	return (
		<nav id="menu">
			<header className="major">
				<h2>Menu</h2>
			</header>
			<ul>
				{createMenuItems()}
				<li>
					<span className="opener">Submenu</span>
					<ul>
						<li>
							<a href="#">Lorem Dolor</a>
						</li>
						<li>
							<a href="#">Ipsum Adipiscing</a>
						</li>
						<li>
							<a href="#">Tempus Magna</a>
						</li>
						<li>
							<a href="#">Feugiat Veroeros</a>
						</li>
					</ul>
				</li>
				<li>
					<span className="opener">Another Submenu</span>
					<ul>
						<li>
							<a href="#">Lorem Dolor</a>
						</li>
						<li>
							<a href="#">Ipsum Adipiscing</a>
						</li>
						<li>
							<a href="#">Tempus Magna</a>
						</li>
						<li>
							<a href="#">Feugiat Veroeros</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

/**
 * Prop validation
 */
Menu.propTypes = {
	// myProps: PropTypes.string.isRequired
};

export default Menu;

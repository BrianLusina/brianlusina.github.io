import React from "react";
import Link from "gatsby-link";
import SocialIcon from "./SocialIcon";

/**
 * Header stateless component
 */
const Header = () => {
	function createLinks() {
		const socialLinks = [
			{
				name: "Twitter",
				link: "https://twitter.com/BrianLusina",
				iconClass: "icon fa-twitter"
			},
			{
				name: "Facebook",
				link: "https://www.facebook.com/brianlusina",
				iconClass: "icon fa-facebook"
			},
			{
				name: "Medium",
				link: "https://medium.com/@lusinabrian",
				iconClass: "icon fa-medium"
			},
			{
				name: "LinkedIn",
				link: "https://www.linkedin.com/in/brianlusina/",
				iconClass: "icon fa-linkedin"
			},
			{
				name: "Github",
				link: "https://github.com/BrianLusina",
				iconClass: "icon fa-github"
			}
		];

		return socialLinks.map((item, index) => {
			return (
				<SocialIcon
					key={index}
					socialIconClass={item.iconClass}
					socialLink={item.link}
					socialName={item.name}
				/>
			);
		});
	}

	return (
		<header id="header">
			<Link to="/" className="logo">
				<strong>LJournal</strong>
			</Link>
			<ul className="icons">{createLinks()}</ul>
		</header>
	);
};

export default Header;

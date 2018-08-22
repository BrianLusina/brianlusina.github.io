import React from 'react'
import { string } from "prop-types";

/**
 * Contact stateless component
 */
const Contact = ({ town, country, email }) => {
	return (
		<section>
			<header className="major">
				<h2>Get in touch</h2>
			</header>
			<p>
				Do get in touch to work on a project, create something new or even talk
				about the universe. :)
			</p>
			<ul className="contact">
				<li className="fa fa-envelope-o">
					<a href={`mailto:${email}`}>blusina@ljournal.com</a>
				</li>
				<li className="fa fa-home">
					{town}, {country}<br />
				</li>
			</ul>
		</section>
	)
}

Contact.propTypes = {
	town: string,
	country: string,
	email: string
}

export default Contact

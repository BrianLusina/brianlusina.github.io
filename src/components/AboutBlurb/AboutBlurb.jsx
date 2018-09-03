import React from 'react'
import { string } from "prop-types";
import { Link } from "gatsby";

const AboutBlurb = ({ about }) => (
	<section className="blurb">
		<h2>About</h2>
		<p>
			{about}
		</p>
		<ul className="actions">
			<li>
				<Link to="/about" className="button">
					Learn More
				</Link>
			</li>
		</ul>
	</section>
)

AboutBlurb.propTypes = {
	about: string,
}

export default AboutBlurb

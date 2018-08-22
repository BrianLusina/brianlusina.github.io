import React from 'react'
import {Link} from "gatsby";
import { string } from "prop-types";

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

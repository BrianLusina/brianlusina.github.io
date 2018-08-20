import React from 'react'
import {Link} from "gatsby";

const AboutBlurb = () => (
	<section className="blurb">
		<h2>About</h2>
		<p>
			LJournal is a collection of snippets, ideas and posts about various things
			ranging from technology, business, money to life.
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

export default AboutBlurb

import React from 'react'

/**
 * Contact stateless component
 */
const Contact = () => {
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
					<a href="mailto:chiefsdome@gmail.com">blusina@ljournal.com</a>
				</li>
				<li className="fa fa-home">
					Nairobi, Kenya<br />
				</li>
			</ul>
		</section>
	)
}

export default Contact

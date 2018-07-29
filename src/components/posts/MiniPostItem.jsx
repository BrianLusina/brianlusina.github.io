import React from 'react'
import { string, shape } from 'prop-types'
import Link from 'gatsby-link'

const MiniPostItem = ({
	link,
	title,
	author: { link: authorLink, name, avatar },
	time,
	img,
}) => (
	<article className="mini-post">
		<header>
			<h3>
				<Link to={link}>{title}</Link>
			</h3>
			<time className="published" dateTime={time}>
				{time}
			</time>
			<Link to={authorLink} className="author">
				<img src={avatar} alt={name} />
			</Link>
		</header>
		<Link to={link} className="image">
			<img src={img} alt={title} />
		</Link>
	</article>
)

MiniPostItem.propTypes = {
	link: string,
	author: shape({
		name: string,
		link: string,
		avatar: string,
	}),
	title: string,
	time: string,
	img: string,
}

export default MiniPostItem

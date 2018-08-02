import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import { string, shape, arrayOf } from 'prop-types'

const PostItem = ({
	title,
	subtitle,
	date,
	link,
	excerpt,
	img: { src, alt },
	author: { name, avatar, link: authorLink },
	tags,
}) => (
	<article className="post">
		<header>
			<div className="title">
				<h2>
					<Link to={link}>{title}</Link>
				</h2>
				<p>{subtitle}</p>
			</div>
			<div className="meta">
				<time className="published" dateTime={date}>
					{date}
				</time>
				<Link to={authorLink} className="author">
					<span className="name">{name}</span>
					<img src={withPrefix(`images/authors/${avatar}`)} alt={name} />
				</Link>
			</div>
		</header>

		<Link to={link} className="image featured">
			<img src={withPrefix(`images/posts/${src}`)} alt={alt} />
		</Link>

		<p>{excerpt}</p>

		<footer>
			<ul className="actions">
				<li>
					<Link to={link} className="button large">
						Continue Reading
					</Link>
				</li>
			</ul>
			<ul className="stats">
				<li>
					{tags.map(tag => (
						<Link key={tag} to="#">
							{tag}
						</Link>
					))}
				</li>
				<li>
					<a href="#" className="icon fa-heart">
						28
					</a>
				</li>
				<li>
					<a href="#" className="icon fa-comment">
						128
					</a>
				</li>
			</ul>
		</footer>
	</article>
)

PostItem.propTypes = {
	title: string,
	subtitle: string,
	excerpt: string,
	link: string,
	date: string,
	img: shape({
		src: string,
		alt: string,
	}),
	tags: arrayOf(string),
	author: shape({
		avatar: string,
		name: string,
		link: string,
	}),
}

export default PostItem

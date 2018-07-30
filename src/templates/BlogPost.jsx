import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { object, shape, string, arrayOf } from 'prop-types'
import Footer from '../components/Footer'

const BlogPost = ({ data, location, pathContext: { next, prev } }) => {
	const {
		markdownRemark: post,
		author: { name, link: authorLink, avatar },
	} = data
	const {
		frontmatter: {
			title,
			subtitle,
			date,
			img: { src, alt },
		},
		html,
	} = post

	return (
		<div>
			<Helmet title={`${title} - LJournal`} />
			<article className="post">
				<header>
					<div className="title">
						<h2>
							<Link to="#">{title}</Link>
						</h2>
						<p>{subtitle}</p>
					</div>
					<div className="meta">
						<time className="published" dateTime={date}>
							{date}
						</time>
						<Link to={authorLink} className="author">
							<span className="name">{name}</span>
							<img src={avatar} alt={name} />
						</Link>
					</div>
				</header>

				<span className="image featured">
					<img src={src} alt={alt} />
				</span>

				<div dangerouslySetInnerHTML={{ __html: html }} />
				<footer>
					<ul className="stats">
						<li>
							<a href="#">General</a>
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

			<Footer />

			<p>
				{prev && (
					<Link to={prev.frontmatter.path}>
						Previous: {prev.frontmatter.title}
					</Link>
				)}
			</p>
			<p>
				{next && (
					<Link to={next.frontmatter.path}>Next: {next.frontmatter.title}</Link>
				)}
			</p>
		</div>
	)
}

BlogPost.propTypes = {
	data: {
		markdownRemark: {
			html: string,
			frontmatter: {
				title: string,
				subtitle: string,
				date: string,
				path: string,
				tags: arrayOf(string),
				author: {
					name: string,
					link: string,
					avatar: string,
				},
				excerpt: string,
			},
		},
	},
	location: object,
	pathContext: shape({
		next: {
			frontmatter: {
				path: string,
				title: string,
			},
		},
		prev: {
			frontmatter: {
				path: string,
				title: string,
			},
		},
	}),
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogPostQuery($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
				subtitle
				date(formatString: "MMMM, DD, YYYY")
				author {
					name
					link
					avatar
				}
				image {
					feature
					thumbnail
					teaser
					credit
					creditlink
				}
				path
				tags
				excerpt
			}
		}
	}
`

export default BlogPost

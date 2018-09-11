import React from "react"
import MainLayout from "../layouts/MainLayout";
import {graphql } from 'gatsby'
import { shape, arrayOf, string, number } from 'prop-types'
import {locationPropType} from '../propTypes';
import PostItem from '../components/posts/PostItem';
import moment from 'moment';
import ButtonLink from '../components/buttons/ButtonLink';

const IndexPage = ({ data: { allMarkdownRemark : {edges: posts}}}) => {
	
	const renderBlogPosts = () => {
		return posts.map(
			(
				{
					node: {
						frontmatter: {
							title,
							subtitle,
							path,
							excerpt,
							author: { avatar, link, name },
							image: { feature },
							date,
							tags,
						},
					},
				}
			) => {
				const time = moment(date).format('MMMM DD, YYYY')
				return (
					<PostItem
						key={path}
						link={path}
						img={{
							src: feature,
							alt: feature,
						}}
						author={{
							name,
							avatar,
							link,
						}}
						title={title}
						subtitle={subtitle}
						date={time}
						excerpt={excerpt}
						tags={tags}
					/>
				)
			}
		)
	}

	return (
		<MainLayout>
			<section>
				{renderBlogPosts()}
				<ButtonLink
					link="/page/2"
					text="Next Page"
					className="button large next"
				/>
			</section>
		</MainLayout>
	)
}

IndexPage.propTypes = {
	data: shape({
		allMarkdownRemark: shape({
			edges: arrayOf(
				shape({
					node: shape({
						excerpt: string,
						html: string,
						timeToRead: number,
						frontmatter: shape({
							path: string,
							author: shape({
								avatar: string,
								link: string,
								name: string
							}),
							date: string,
							excerpt: string,
							image: shape({
								credit: string,
								creditLink: string,
								feature: string,
								teaser: string,
								thumbnail: string
							}),
							subtitle: string,
							title: string,
						})
					})
				})
			)
		})
	}),
	location: locationPropType
}

export const query = graphql`
	query BlogPostsQuery {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 5
			filter: {frontmatter: {published: {eq: true}}}
		){
			edges {
				node {
					frontmatter {
						title
						subtitle
						category
						excerpt
						path
						date(formatString: "MMMM DD, YYYY")
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
						tags
					}
					excerpt
					timeToRead
					html
				}
			}
		}
	}
`

export default IndexPage;
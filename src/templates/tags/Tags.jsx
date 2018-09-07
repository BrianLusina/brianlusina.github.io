import React from 'react';
import { graphql } from "gatsby";
import { shape, string, arrayOf, number} from "prop-types";
import MainLayoutWrapper from '../../layouts/MainLayout';
import PostItem from '../../components/posts/PostItem';
import ButtonLink from '../../components/buttons/ButtonLink';
import "./tags.scss";

export const TagsTemplate = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged "${tag}"`

	return (
		<MainLayoutWrapper displaySidebar={false} tag={tag}>
			<div className="tag">
				<h4 className="tag__title">Category</h4>
				<h1 className="tag__name">{tag}</h1>
				<h4>{tagHeader}</h4>
			</div>
			{
				edges.map(({ node }) => {
					const { path, title, subtitle, excerpt, date, tags, image, author } = node.frontmatter;
					const { feature } = image;
					const { avatar, link, name } = author;
                    
					return (
						<PostItem
							key={path}
							title={title}
							subtitle={subtitle}
							excerpt={excerpt}
							link={path}
							date={date}
							img={{
								alt:feature,
								src:feature
							}}
							tags={tags}
							author={{
								avatar,
								name,
								link
							}}
						/>
					)
				})
			}
			<ButtonLink link="/tags" text="All Tags"/>
		</MainLayoutWrapper>
	)
}

TagsTemplate.propTypes = {
	pageContext: shape({
		tag: string.isRequired
	}).isRequired,
	data: shape({
		allMarkdownRemark: shape({
			totalCount: number.isRequired,
			edges: arrayOf(
				shape({
					node: shape({
						frontMatter: shape({
							path: string,
							title: string,
							subtitle: string,
							excerpt: string,
							date: string,
							category: string,
							author: shape({
								name: string,
								link: string,
								avatar: string,
							}),
							image: shape({
								feature: string,
								thumbnail: string,
								teaser: string,
								credit: string,
								creditlink: string,
							}),
							tags: arrayOf(string),
						})
					})
				})
			)
		})
	}).isRequired
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
              title
              subtitle
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


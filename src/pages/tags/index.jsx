import React from 'react';
import { shape, string, arrayOf, number} from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import MainLayoutWrapper from '../../layouts/MainLayout';
import defaultMiniPic from '../../assets/images/default_mini_pic.jpg'


const TagsPage = ({
	data: {
		allMarkdownRemark: { group }
	},
}) => (
	<MainLayoutWrapper displaySidebar={false}>
		<div className="tag">
			<h1 className="tag__title">All Tags</h1>
		</div>
		<section>
			<div className="box alt">
				<div className="row gtr-uniform">
					{
						group.map(({fieldValue, totalCount}) => (
							<div key={fieldValue} className="col-4">
								<article className="mini-post">
									<header>
										<h3>
											<Link to={`/tags/${kebabCase(fieldValue)}/`}>
												{fieldValue}
											</Link>
										</h3>
										<p>{totalCount} {`post${totalCount === 1 ? '' : 's'}`}</p>
									</header>
									<Link to={`/tags/${kebabCase(fieldValue)}`} className="image">
										<img src={defaultMiniPic} alt={fieldValue}/>
									</Link>
								</article>
							</div>
						))
					}
				</div>
			</div>
		</section>
	</MainLayoutWrapper>
)
  
TagsPage.propTypes = {
	data: shape({
		allMarkdownRemark: shape({
			group: arrayOf(
				shape({
					fieldValue: string.isRequired,
					totalCount: number.isRequired,
				}).isRequired
			),
		}),
	}),
}
  
export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 20
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
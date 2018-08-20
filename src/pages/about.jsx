import React from 'react';
import MainLayoutWrapper from '../layouts/MainLayout';
import { graphql, withPrefix } from 'gatsby';
import { string, shape,arrayOf} from "prop-types";

const AboutPage = ({ data: { allAuthorsJson: { edges: authors } }}) => {
	return (
		<MainLayoutWrapper displaySidebar={false} pageTitle={"About"}>
			<section>
				<h3>About</h3>
				<h4>About LJournal</h4>
				{
					authors.map(({ node: {id, name, web, email, bio, avatar_, link, twitter, google: { plus } }}) => {
						return (
							<p key={id}>
								<span className="image left">
									<img src={withPrefix(`images/authors/${avatar_}`)} alt={name}/>
								</span>
								{bio}
							</p>)
					})
				}
			</section>
		</MainLayoutWrapper>
	)
}

AboutPage.propTypes = {
	data: shape({
		allAuthorsJson: shape({
			edges: arrayOf(shape({
				node: shape({
					id: string,
					name: string,
					web: string,
					email: string,
					bio: string,
					avatar_: string,
					link: string,
					twitter: string,
					google: shape({
						plus: string
					})	
				})
			}))
		})
	})
}

export const query = graphql`
	query AboutPageQuery {
		allAuthorsJson {
			edges {
				node {
					id
					name
					web
					email
					bio
					avatar_
					link
					twitter
					google {
						plus
					}
				}
			}
		}
	}
`

export default AboutPage;
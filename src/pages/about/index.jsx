import React from 'react';
import MainLayoutWrapper from '../../layouts/MainLayout';
import { graphql, withPrefix } from 'gatsby';
import { string, shape,arrayOf} from "prop-types";
// import Footer from '../../components/Footer/Footer';

const AboutPage = ({ data: { allAuthorsJson: { edges: authors } }}) => {
	return (
		<MainLayoutWrapper displaySidebar={false} pageTitle={"About"}>
			<section>
				<h2>About LJournal</h2>
				<p>
					LJournal is a collection of thoughts, ideas, inspiration and encounters in the world of technolog, design, business and finance. 
					LJournal has been created by Brian Lusina who is an Software Engineer who takes a wide view of a whole system and focuses on building products that benefit both the organization and the customer. 
					Lusina inherently understands that the customer is the single most valuable asset of an organization and is thus driven to create the best user-experience. 
					<br/>
					LJournal is where he writes about ideas longer than 280 characters.
					When not coding, he is traveling, planning for the next adventure and trying very hard not to be the worst player on the football pitch and make some tunes on his guitar :)
				</p>
				{
					// authors.map(({ node: {id, name,bio, avatar_, tagline, social}}) => {
					// 	return (
					// 		<Fragment key={id}>
					// 			<h4 id={id}>About {name}</h4>
					// 			<span className="image left">
					// 				<img src={withPrefix(`images/authors/${avatar_}`)} alt={name}/>
					// 			</span>
					// 			<p dangerouslySetInnerHTML={{ __html: bio}}/>
					// 			<i>{tagline}</i>
					// 			<br/>
					// 			<br/>
					// 			<Footer hasCopyright={false} socialLinks={social}/>
					// 			{/* <div 
					// 				className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" 
					// 				data-theme="light" data-vanity="brianlusina">
					// 				<a className="LI-simple-link" href='https://ke.linkedin.com/in/brianlusina?trk=profile-badge'>Brian Lusina</a>
					// 			</div> */}
								
					// 			{/* <a href="https://wakatime.com">
					// 				<img src="https://wakatime.com/@a3426a26-e7b4-4b98-8f41-fd87685dc883/e4541f05-d673-4aee-be8f-6037d5453b25.png" />
					// 			</a> */}
					// 		</Fragment>
					// 	)
					// })
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
					email: string,
					tagline: string,
					bio: string,
					avatar_: string,
					link: string,
					social: arrayOf(shape({
						name: string,
						link: string,
					}))
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
					email
					tagline
					bio
					avatar_
					link
					social {
						name
						link
					}
				}
			}
		}
	}
`

export default AboutPage;
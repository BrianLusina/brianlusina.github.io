import React from "react"
import PageLayout from "../../layouts/page/PageLayout";
import { shape, string, number, arrayOf, bool } from 'prop-types'
import PostItem from '../../components/posts/PostItem';
import moment from 'moment';
import Pagination from '../../components/Pagination';

const PageTemplate = ({ pageContext }) => {
	const { posts, page, pagesSum, prevPath, nextPath } = pageContext;
	
	const renderBlogPosts = () => {
		return posts.map(
			(
				{
					id,
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
				}
			) => {
				const time = moment(date).format('MMMM DD, YYYY')
				return (
					<PostItem
						key={id}
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
		<PageLayout>
			<section>
				{renderBlogPosts()}
				<Pagination
					previousUrl={prevPath}
					nextUrl={nextPath}
					pageCount={pagesSum}
					currentPage={page}
				/>
			</section>
		</PageLayout>
	)
}

PageTemplate.propTypes = {
	pageContext: shape({
		nextPath: string,
		page: number,
		pagesSum: number,
		posts: arrayOf(shape({
			html: string,
			id: string,
			timeToRead: number,
			frontmatter: shape({
				author: shape({
					avatar: string,
					link: string,
					name: string
				}),
				category: string,
				date: string,
				excerpt: string,
				image: shape({
					credit: string,
					creditLink: string,
					feature: string,
					teaser: string,
					thumbnail: string
				}),
				path: string,
				published: bool,
				subtitle: string,
				tags: arrayOf(string),
				title: string,
			})
		})),
		prevPath: string,
	}),
}

export default PageTemplate;
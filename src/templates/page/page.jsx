import React from "react"
import { object } from 'prop-types'
import Layout from "../../layouts/MainLayout";
import Home from '../home/Home';

const PageTemplate = ({ pageContext }) => {
	const { posts, page, pagesSum, prevPath, nextPath } = pageContext;
	return (
		<Layout>
			<Home posts={posts} />
		</Layout>
	)
}

PageTemplate.propTypes = {
	pageContext: object,
}

export default PageTemplate;
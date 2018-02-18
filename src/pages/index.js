import React from 'react'
import Link from 'gatsby-link'
import FeaturePost from "../components/feature/Feature";

const IndexPage = () => (
	<FeaturePost
		featureTitle={"Feature Post"}
		shortDescription={"Short feature description"}
		subtitle={"Short subtitle post"}
		postLink={"page-2"}/>
);

export default IndexPage

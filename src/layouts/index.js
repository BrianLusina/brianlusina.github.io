import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
//import AppError from "../components/errors/AppError";
import Header from "../components/Header";
import SideBar from "../containers/sidebar/Sidebar";
import "../styles/scss/main.scss";

const TemplateWrapper = ({ children, data }) => (
	<div>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: "description", content: "LJournal is a simple blog" },
				{
					name: "keywords",
					content: "data, Lusina, Brian Lusina, code, bugs, algorithms"
				}
			]}
		/>
		<div id="wrapper">
			<div id="main">
				<div className="inner">
					<Header />
					{children()}
				</div>
			</div>
			<SideBar />
		</div>
	</div>
);

/**
 * Prop Type validation
 */
TemplateWrapper.propTypes = {
	children: PropTypes.func,
	data: PropTypes.object
};

/**
 * GraphQl query
 */
// eslint-disable-next-line no-undef
export const query = graphql`
	query RootLayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default TemplateWrapper;

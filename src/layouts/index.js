import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
//import AppError from "../components/errors/AppError";
import Header from "../components/common/Header";
import SideBar from "../containers/sidebar/Sidebar";

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

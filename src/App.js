/**
 * @author lusinabrian on 12/11/17.
 * @notes: App container
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppError from "./components/errors/AppError";
import Feature from "./components/feature/Feature";
import SideBar from "./containers/sidebar/Sidebar";
import Blog from "./containers/blog/BlogContainer";
import BlogPage from "./components/BlogPage";
import Home from "./containers/home/Home";
import routes from "./routes/routes";
import Header from "./components/common/Header";
/**
 * App container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  /**
   * Render container component
   */
  render() {
    return (
      <AppError>
        <Router>
          <div id="wrapper">
            <div id="main">
              <div className="inner">
                <Header/>
                <Route exact path={routes.INDEX_ROUTE} component={Home} />
                <Route path={routes.BLOG_ROUTE} component={Blog} />
                <Route path={routes.BLOG_PAGE_ROUTE} component={BlogPage}/>
              </div>
            </div>
            <SideBar/>
          </div>
        </Router>
      </AppError>
    );
  }
}

/**
 * Validates App prop types
 */
App.propTypes = {};

/**
 * maps the state of the redux store to the App props
 * @param {Object} state of redux store
 * @param {Object} ownProps App properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

/**
 * maps dispatch actions to props in this container
 * component
 * @param {Object} dispatch
 * @returns {Object} actions object
 */
function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
  };
}

/**
 * Connect App container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);

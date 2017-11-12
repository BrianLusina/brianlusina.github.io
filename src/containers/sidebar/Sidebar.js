/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Footer from "../../common/Footer";
import Search from "../../common/Search"
import Menu from "../../components/Menu";
import Contact from "../../components/Contact";

/**
 * SidebarV container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

  }

  /**
   * Render container component
   */
  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <Search/>
          <Menu/>

          <section>
            <header className="major">
              <h2>Featured</h2>
            </header>
            <div className="mini-posts">

            </div>

            <ul className="actions">
              <li>
                <a href="#" className="button">More</a>
              </li>
            </ul>
          </section>

          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

/**
 * Validates SidebarV prop types
 */
Sidebar.propTypes = {};

/**
 * maps the state of the redux store to the SidebarV props
 * @param {Object} state of redux store
 * @param {Object} ownProps SidebarV properties
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
 * Connect SidebarV container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

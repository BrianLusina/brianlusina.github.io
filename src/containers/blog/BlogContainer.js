/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/**
 * BlogContainer container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class BlogContainer extends Component {
  constructor(props, context) {
    super(props, context);

  }

  renderBlogPosts(){
    return this.props.posts.map((item, key) => {
      return (
        <article key={key}>
          <a href={item.link} className="image">
            <img src={item.imgSrc} alt={item.imgAlt} /></a>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <ul className="actions">
            <li>
              <a href={item.link} className="button">More</a>
            </li>
          </ul>
        </article>
      )
    })
  }

  /**
   * Render container component
   */
  render() {
    return (
      <section>
        <header className="major">
          <h2>Recent</h2>
        </header>
        <div className="posts">
          {this.renderBlogPosts()}
        </div>
      </section>
    );
  }
}

/**
 * Validates BlogContainer prop types
 */
BlogContainer.propTypes = {};

/**
 * maps the state of the redux store to the BlogContainer props
 * @param {Object} state of redux store
 * @param {Object} ownProps BlogContainer properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
  return {
    posts: state.blog.blogPosts
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
    //actions: bindActionCreators(actions, dispatch)
  };
}

/**
 * Connect BlogContainer container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)

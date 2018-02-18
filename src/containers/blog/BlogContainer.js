/**
 * @author lusinabrian on 12/11/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogItem from "./BlogItem";

/**
 * BlogContainer container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class BlogContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	renderBlogPosts(){
        //
		// // limit these items to most 6 recent posts
		// return this.props.blogPosts.map(({ node }, index) => {
		// 	return <BlogItem
		// 		key={index}
		// 		link={node.link}
		// 		imgSrc={node.imgSrc}
		// 		imgAlt={node.imgAlt}
		// 		title={node.title}
		// 		excerpt={node.excerpt}
		// 	/>
		// })
	}

	componentWillReceiveProps(nextProps){
		// console.log(nextProps.data);
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
 * @property {Number} limit The number of posts to limit to
 */
BlogContainer.propTypes = {
	limit : PropTypes.number,
	blogPosts: PropTypes.object,
	data: PropTypes.object,
};

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
    at NodePath._call (/home/lusinabrian/Projects/Portfolio/brianlusina
 * Connect BlogContainer container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)

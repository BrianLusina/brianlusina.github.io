/**
 * @author lusinabrian on 05/12/17.
 * @notes: Home Container
 */

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from "../components/common/Header";
import Feature from "./components/feature/Feature";
import SideBar from "./containers/sidebar/Sidebar"
import Blog from "./containers/blog/BlogContainer";

/**
 * Home container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class Home extends Component {
    constructor(props, context) {
        super(props, context);

    }

    /**
     * Render container component
     */
    render() {
        return (
            <div>

            </div>
        );
    }
}

/**
 * Validates Home prop types
 */
Home.propTypes = {};

/**
 * maps the state of the redux store to the Home props
 * @param {Object} state of redux store
 * @param {Object} ownProps Home properties
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
        actions: bindActionCreators(actions, dispatch)
    };
}

/**
 * Connect Home container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home)

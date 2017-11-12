import React from 'react';
import PropTypes from 'prop-types';

/**
 * Search stateless component
 */
const Search = ({ }) => {
  return (
    <section id="search" className="alt">
      <form method="post" action="#">
        <input type="text" name="query" id="query" placeholder="Search"/>
      </form>
    </section>
  );
};

/**
 * Prop validation
 */
Search.propTypes = {
  // myProps: PropTypes.string.isRequired
};

export default Search;

import React from 'react';
import { object } from "prop-types";

const Search = ({...rest}) => {
	return (
		<form className="search" method="get" action="#" {...rest}>
			<input type="text" name="query" placeholder="Search" />
		</form>
	)
}

Search.propTypes = {
	rest: object,
}

export default Search

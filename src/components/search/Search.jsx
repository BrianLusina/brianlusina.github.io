import React, { Component } from 'react';
import { object } from "prop-types";

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: "",
			results: []
		}
	}

	getSearchResults(query) {
		if (!query || !window.__LUNR__) return []
		const results = window.__LUNR__.index.search(query)
		return results.map(({ ref }) => window.__LUNR__.store[ref])
	}

	handleSearchChange = e => {
		const searchTerm = e.target.value;
		const results = this.getSearchResults(searchTerm);

		this.setState({
			searchTerm, results
		})
	}

	render(){
		const { ...rest } = this.props;
		const { searchTerm } = this.state;

		return (
			<form className="search" method="get" action="#" {...rest}>
				<input 
					type="text" 
					name="query" 
					placeholder="Search"
					onChange={this.handleSearchChange}
					value={searchTerm}
				/>
			</form>
		)
	}
}

Search.propTypes = {
	rest: object,
}

export default Search

import React from 'react'

const Search = () => {
	return (
		<section>
			<form className="search" method="get" action="#">
				<input type="text" name="query" placeholder="Search" />
			</form>
		</section>
	)
}

export default Search

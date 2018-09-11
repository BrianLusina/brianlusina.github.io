import React from 'react'
import { string, number } from 'prop-types'
import ButtonLink from './buttons/ButtonLink';

const Pagination = ({ previousUrl, nextUrl }) => {
	return (
		<ul className="actions pagination">
			<li>
				<ButtonLink 
					link={previousUrl} 
					text={"Previous Page"}
					className={`${ previousUrl ? '' : 'disabled'} button large previous`}
				/>
			</li>
			<li>
				<ButtonLink
					link={nextUrl}
					text="Next Page"
					className={`${nextUrl ? '' : 'disabled'} button large next`}
				/>
			</li>
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: number,
	previousUrl: string.isRequired,
	nextUrl: string.isRequired,
	pageCount: number.isRequired,
}

export default Pagination

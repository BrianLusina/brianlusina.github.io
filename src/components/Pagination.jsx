import React from 'react'
import { string, number } from 'prop-types'
import ButtonLink from './buttons/ButtonLink';

const Pagination = ({ previousUrl, nextUrl, pageCount }) => {
	return (
		<ul className="actions pagination">
			<li>
				<ButtonLink 
					link={previousUrl} 
					text={"Previous Page"}
					className={`${
						previousUrl === '0' ? 'disabled' : ''
					} button large previous`}
				/>
			</li>
			<li>
				<ButtonLink
					link={nextUrl}
					text="Next Page"
					className={`${
						nextUrl === (pageCount + 1).toString() ? 'disabled' : ''
					} button large next`}
				/>
			</li>
		</ul>
	)
}

Pagination.propTypes = {
	previousUrl: string.isRequired,
	nextUrl: string.isRequired,
	pageCount: number.isRequired,
}

export default Pagination

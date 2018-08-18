import React from 'react'
import { string, number } from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ previousUrl, nextUrl, pageCount }) => {
	return (
		<ul className="actions pagination">
			<li>
				<Link
					to={previousUrl}
					className={`${
						previousUrl === '0' ? 'disabled' : ''
					} button large previous`}
				>
					Previous Page
				</Link>
			</li>
			<li>
				<Link
					to={nextUrl}
					className={`${
						nextUrl === (pageCount + 1).toString() ? 'disabled' : ''
					} button large next`}
				>
					Next Page
				</Link>
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

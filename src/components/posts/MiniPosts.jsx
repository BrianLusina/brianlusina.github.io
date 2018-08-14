import React from 'react'
import MiniPostItem from './MiniPostItem'
import { object } from 'prop-types'

const MiniPosts = ({ data }) => {
	return (
		<section>
			<div className="mini-posts">
				{/* {data.map(({ item }, index) => {
					return (
						<MiniPostItem
							key={index}
							link=""
							title=""
							author={{
								link: '',
								name: '',
								avatar: '',
							}}
							time=""
							img=""
						/>
					)
				})} */}
			</div>
		</section>
	)
}

MiniPosts.propTypes = {
	data: object,
}

export default MiniPosts

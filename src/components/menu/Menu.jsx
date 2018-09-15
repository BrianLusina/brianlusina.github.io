import React from 'react'
import MenuItem from './MenuItem'
import Search from '../search/Search'

/**
 * Menu stateless component
 */
const Menu = () => {
	function createMenuItems() {
		const items = [
			{
				link: '/posts/',
				title: 'Posts',
				desc: 'Posts',
			},
			{
				link: '/authors/',
				title: 'Authors',
				desc: 'List of authors',
			},
		]

		return items.map(({ link, title, desc }, index) => {
			return <MenuItem key={index} link={link} title={title} desc={desc} />
		})
	}

	return (
		<section id="menu">
			<section>
				<Search />
			</section>

			<section>
				<ul className="links">{createMenuItems()}</ul>
			</section>

			<section>
				<ul className="actions stacked">
					<li>
						<a href="#" className="button large fit">
							Log In
						</a>
					</li>
				</ul>
			</section>
		</section>
	)
}

export default Menu

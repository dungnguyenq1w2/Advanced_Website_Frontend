import './style.css'
import React from 'react'
import NavItem from '../NavItem'

function NavList({ links }) {
	return (
		<div className='nav__list'>
			{links?.map((link) => (
				<NavItem key={link.id} link={link} />
			))}
		</div>
	)
}

export default NavList

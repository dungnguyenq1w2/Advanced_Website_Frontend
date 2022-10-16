import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({ link }) {
	return (
		<div className='nav__item'>
			<Link to={link.path}>
				<h4>
					{link.path.toUpperCase()} - {link.name}
				</h4>
				<p>{link.description}</p>
			</Link>
		</div>
	)
}

export default NavItem

import './style.css'

import React from 'react'

import CLogin from 'common/components/CLogin'
import { Link } from 'react-router-dom'

function MLogin() {
	return (
		<div className='login__header'>
			<div>
				<Link to='/btcn05'>Back</Link>
				<h1>Đăng nhập</h1>
			</div>

			<div className='login__body'>
				<CLogin />
			</div>
		</div>
	)
}

export default MLogin

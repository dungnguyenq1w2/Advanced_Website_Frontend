import './style.css'

import React from 'react'

import CRegister from 'common/components/CRegister'
import { Link } from 'react-router-dom'

function MRegister() {
	return (
		<div className='register__header'>
			<div>
				<Link to='/btcn05'>Back</Link>
				<h1>Đăng ký</h1>
			</div>

			<div className='register__body'>
				<CRegister />
			</div>
		</div>
	)
}

export default MRegister

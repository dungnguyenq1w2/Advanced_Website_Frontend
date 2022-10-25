import './style.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { logout } from 'apis/auth.api'

function getUserData() {
	return JSON.parse(localStorage.getItem('user'))
}

function MWelcome() {
	const [user, setUser] = useState()

	useEffect(() => {
		setUser(getUserData())
	}, [])

	const handleLogout = async () => {
		const res = await logout()
		if (res.data) {
			setUser({})
		}
	}
	return (
		<div className='registration__body'>
			<div>
				<Link to='/'>Back to Home</Link>
				<h1>Registration</h1>
			</div>
			{user?.user ? (
				<div className='welcome'>
					<h1>Hello {user.user}</h1>
					<button onClick={handleLogout}>Đăng xuất</button>
				</div>
			) : (
				<div className='registration__btn'>
					<Link to='login'>
						<button className='btn__login'>Đăng nhập</button>
					</Link>
					<Link to='register'>
						<button className='btn__register'>Đăng ký</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default MWelcome

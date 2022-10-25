import './style.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { logout } from 'apis/auth.api'

function getUserData() {
	return JSON.parse(localStorage.getItem('user'))
}

function MWelcome() {
	const [user, setUser] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setUser(getUserData())
	}, [])

	const handleLogout = async () => {
		setIsLoading(true)
		const res = await logout()
		if (res.data) {
			setUser({})
			setIsLoading(false)
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
					{isLoading ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							// className='animate-ping h-5 w-5 mt-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
							/>
						</svg>
					) : null}
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

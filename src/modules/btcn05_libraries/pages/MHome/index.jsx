import './style.css'

import { logout } from 'apis/auth.api'
import CLoading from 'common/components/CLoading'
import MUserList from 'modules/btcn05_libraries/components/MUserList'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function getUserData() {
	return JSON.parse(localStorage.getItem('user'))
}
const data = [
	{
		id: 1,
		name: 'Nguyễn Tấn Dũng',
	},
	{
		id: 2,
		name: 'Nguyễn Văn A',
	},
	{
		id: 3,
		name: 'Nguyễn Thị B',
	},
	{
		id: 4,
		name: 'Nguyễn Bảo Khánh',
	},
	{
		id: 5,
		name: 'Lê Anh Tú',
	},
	{
		id: 6,
		name: 'Trần Anh Khoa',
	},
	{
		id: 7,
		name: 'Trần Sơn Tùng',
	},
	{
		id: 8,
		name: 'Bùi Hùng Cường',
	},
]
function MHome() {
	const [user, setUser] = useState()
	const [isFetch, setIsFetch] = useState(false)
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
		<div className='libraries__body'>
			<div>
				<Link to='/'>Back to Home</Link>
				<h1>Apply Front-end Libraries</h1>
			</div>
			{user?.user ? (
				<>
					<div className='welcome'>
						<h1>Hello {user.user}</h1>
						<button onClick={handleLogout}>Đăng xuất</button>
						{isLoading && <CLoading />}
					</div>
					<div className='container'>
						<button onClick={() => setIsFetch(true)}>Xem danh sách User</button>
						<div>{true && <MUserList />}</div>
					</div>
				</>
			) : (
				<div className='libraries__btn'>
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

export default MHome

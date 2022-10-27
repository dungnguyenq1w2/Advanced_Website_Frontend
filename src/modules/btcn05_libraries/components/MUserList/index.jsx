import './style.css'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getAllUsers, getUserById } from 'apis/user.api'

import CLoading from 'common/components/CLoading'

import MUserItem from '../MUserItem'

function MUserList() {
	const [userId, setUserId] = useState(0)
	const {
		data: users,
		isFetching: isFetchingUsers,
		isLoading: isLoadingUsers,
		refetch,
	} = useQuery(['users'], getAllUsers)

	const { data: userInfo, isLoading } = useQuery(['user', userId], () => getUserById(userId), {
		enabled: !!userId,
	})
	console.log('🚀 ~ isLoading', isLoading)

	const handleItemClick = (id) => {
		setUserId(id)
	}

	if (isLoadingUsers) return <CLoading />
	if (isFetchingUsers) return <CLoading />

	return (
		<div className='userlist__container'>
			<table>
				<thead>
					<tr>
						<th>STT</th>
						<th>ID</th>
						<th>Họ tên</th>
					</tr>
				</thead>
				<tbody>
					{users.data.data.map((user, index) => {
						if (user.id == userInfo?.data?.data?.id) {
							return (
								<MUserItem
									key={user.id}
									index={index}
									user={user}
									onClick={handleItemClick}
									userInfo={userInfo.data.data}
								/>
							)
						} else {
							return (
								<MUserItem
									key={user.id}
									index={index}
									user={user}
									onClick={handleItemClick}
								/>
							)
						}
					})}
				</tbody>
			</table>
			<button onClick={refetch}>Refetch</button>
		</div>
	)
}

export default MUserList

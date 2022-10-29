import './style.css'

import React, { useEffect, useState } from 'react'
import CLoading from 'common/components/CLoading'

function MUserItem({ index, user, onClick, userInfo }) {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (userInfo?.username) setIsLoading(false)
	}, [userInfo])

	return (
		<tr
			className='row'
			onClick={() => {
				if (!userInfo?.username) {
					onClick(user.id)
					setIsLoading(true)
				} else {
					onClick(0)
					setIsLoading(false)
				}
			}}
		>
			<td>{index + 1}</td>
			<td>{user.id}</td>
			<td>{user.name}</td>
			<div className='user__info'>
				{isLoading && <CLoading />}
				{userInfo?.username && (
					<div>
						<span>{userInfo?.username}</span>
					</div>
				)}
			</div>
		</tr>
	)
}

export default MUserItem

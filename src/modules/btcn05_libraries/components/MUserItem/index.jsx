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
			<td>
				{isLoading && <CLoading />}
				{userInfo?.username && <span>{userInfo?.username}</span>}
			</td>
		</tr>
	)
}

export default MUserItem

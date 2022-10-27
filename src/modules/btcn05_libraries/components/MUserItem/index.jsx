import './style.css'

import React from 'react'
import CLoading from 'common/components/CLoading'

function MUserItem({ index, user, onClick, userInfo }) {
	return (
		<tr className='row' onClick={() => onClick(user.id)}>
			<td>{index + 1}</td>
			<td>{user.id}</td>
			<td>{user.name}</td>

			{userInfo?.username && (
				<div className='user__info'>
					<div>
						<span>{userInfo?.username}</span>
					</div>
				</div>
			)}
		</tr>
	)
}

export default MUserItem

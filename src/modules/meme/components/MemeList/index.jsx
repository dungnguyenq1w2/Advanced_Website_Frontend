import './style.css'
import React from 'react'
import MemeItem from '../MemeItem'

function MemeList({ memes }) {
	return (
		<div className='container'>
			{memes?.map((meme) => (
				<MemeItem key={meme.id} meme={meme} />
			))}
		</div>
	)
}

export default MemeList

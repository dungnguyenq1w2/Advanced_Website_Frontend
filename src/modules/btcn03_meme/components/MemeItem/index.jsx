import './style.css'
import React from 'react'

function MemeItem({ meme }) {
	return (
		<div className='meme__item'>
			<img
				src={meme?.url}
				alt={meme?.name}
				width={300}
				height={300}
				style={{ objectFit: 'contain' }}
			/>
			<p>{meme?.name}</p>
		</div>
	)
}

export default MemeItem

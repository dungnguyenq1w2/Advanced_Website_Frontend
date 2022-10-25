import './style.css'

import React from 'react'

function Square({ value, isWin, onClick }) {
	return (
		<button
			className={`square ${isWin && 'win'} ${value === 'X' ? 'x-style' : 'o-style'}`}
			onClick={onClick}
		>
			{value}
		</button>
	)
}

export default Square

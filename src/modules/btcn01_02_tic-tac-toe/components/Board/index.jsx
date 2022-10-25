import './style.css'

import React, { useMemo } from 'react'
import Square from '../Square'

function Board({ size, winner, squares, onClick }) {
	const sizes = useMemo(() => Array(size).fill(), [size])

	function renderSquare(row) {
		return (
			<>
				{sizes.map((e, col) => {
					let isWin = false
					if (winner.player) isWin = winner?.location?.includes(row * size + col)
					return (
						<Square
							key={col}
							isWin={isWin}
							value={squares[row * size + col]}
							onClick={() => onClick(row * size + col)}
						/>
					)
				})}
			</>
		)
	}

	return (
		<>
			{sizes.map((e, row) => (
				<div key={row} className='board-row'>
					{renderSquare(row)}
				</div>
			))}
		</>
	)
}

export default Board

import './style.css'

import { useMemo } from 'react'

import Board from '../Board'

function Game({ size, winner, history, stepNumber, xIsNext, sorting, jumpTo, onSquareClick }) {
	const current = useMemo(() => history[stepNumber], [history, stepNumber])

	const moves = history.map((step, move) => {
		const desc = move
			? `Go to move #${move} with location ${step.isX ? 'X' : 'O'}(${step.location.x}, ${
					step.location.y
			  })`
			: 'Go to game start'
		return (
			<li key={move}>
				<button
					className={`${
						current.location.x === step.location.x &&
						current.location.y === step.location.y &&
						'bold'
					}`}
					onClick={() => jumpTo(move)}
				>
					{desc}
				</button>
			</li>
		)
	})

	const sortedMoves = useMemo(() => {
		if (sorting) return moves
		else return moves.reverse()
	}, [moves, sorting])

	const status = useMemo(() => {
		if (current.squares.includes(null))
			if (winner.player) {
				return 'Winner: ' + winner.player
			} else {
				return 'Next player: ' + (xIsNext ? 'X' : 'O')
			}
		else return 'Draw'
	}, [current, winner, xIsNext])

	return (
		<div className='game'>
			<div className='game-board'>
				<Board
					size={size}
					winner={winner}
					squares={current.squares}
					onClick={(i) => onSquareClick(i)}
				/>
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ol>{sortedMoves}</ol>
			</div>
		</div>
	)
}

export default Game

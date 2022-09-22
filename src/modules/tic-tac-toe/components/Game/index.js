import './style.css'

import React, { useMemo, useState } from 'react'
import Board from '../Board'
import { calculateWinner } from 'utils'

function Game() {
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
	const [stepNumber, setStepNumber] = useState(0)
	const [xIsNext, setXIsNext] = useState(true)

	const handleClick = (i) => {
		const _history = history.slice(0, stepNumber + 1)
		const current = _history[_history.length - 1]
		const squares = current.squares.slice()
		if (calculateWinner(squares) || squares[i]) {
			return
		}
		squares[i] = xIsNext ? 'X' : 'O'
		setHistory([
			..._history,
			{
				squares: squares,
			},
		])
		setStepNumber(_history.length)
		setXIsNext(!xIsNext)
	}

	const jumpTo = (step) => {
		setStepNumber(step)
		setXIsNext(step % 2 === 0)
	}

	const current = useMemo(() => history[stepNumber], [history, stepNumber])

	const winner = calculateWinner(current.squares)

	const moves = history.map((step, move) => {
		const desc = move ? 'Go to move #' + move : 'Go to game start'
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		)
	})

	const status = useMemo(() => {
		if (winner) {
			return 'Winner: ' + winner
		} else {
			return 'Next player: ' + (xIsNext ? 'X' : 'O')
		}
	}, [winner, xIsNext])

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	)
}

export default Game

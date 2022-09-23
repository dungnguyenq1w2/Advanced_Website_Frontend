import 'modules/tic-tac-toe/assets/style/index.css'

import { useState } from 'react'

import { calculateWinner } from 'utils'

import Game from '../components/Game'
import Toggle from 'common/components/Toggle'

let size = parseInt(prompt('Nhập số hàng/cột: ')) // Số hàng/cột
if (!size) size = 7
function TikTacToe() {
	const [history, setHistory] = useState([
		{
			squares: Array(size * size).fill(null),
			location: {
				x: null,
				y: null,
			},
		},
	])
	const [stepNumber, setStepNumber] = useState(0)
	const [isXNext, setIsXNext] = useState(true)
	const [winner, setWinner] = useState({ player: false, location: [] })
	const [isToggleSort, setIsToggleSort] = useState(true)

	const handleSquareClick = (i) => {
		if (winner.player) {
			return
		}

		const _history = history.slice(0, stepNumber + 1)
		const current = _history[_history.length - 1]
		const squares = current.squares.slice()

		if (squares[i]) {
			return
		}

		const isWinner = calculateWinner(squares, isXNext, i, size)
		if (isWinner.player) {
			console.log(isWinner)
			setWinner(isWinner)
		}

		squares[i] = isXNext ? 'X' : 'O'

		setHistory([
			..._history,
			{
				squares: squares,
				location: {
					x: i % size,
					y: Math.floor(i / size),
				},
				isX: isXNext,
			},
		])

		setStepNumber(_history.length)
		setIsXNext(!isXNext)
	}

	const handleJumpTo = (step) => {
		if (step !== history.length - 1) {
			setWinner(false)
		}
		setStepNumber(step)
		setIsXNext(step % 2 === 0)
	}

	const handleToggle = () => {
		setIsToggleSort((cur) => !cur)
	}

	return (
		<div className='tictactoe'>
			<Game
				size={size}
				winner={winner}
				history={history}
				sorting={isToggleSort}
				stepNumber={stepNumber}
				xIsNext={isXNext}
				jumpTo={handleJumpTo}
				onSquareClick={handleSquareClick}
			/>
			<div className='toggle'>
				<span>{isToggleSort ? 'Ascending' : 'Descending'}</span>
				<Toggle isOn={isToggleSort} handleToggle={handleToggle} />
			</div>
		</div>
	)
}

export default TikTacToe

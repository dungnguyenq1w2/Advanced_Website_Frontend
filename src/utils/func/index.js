export const calculateWinner = (squares, isX, i, size) => {
	if (i == null) return

	const x = i % size
	const y = Math.floor(i / size)

	let xUp = x + 1
	let yUp = y + 1
	let xDown = x - 1
	let yDown = y - 1

	let count = 0

	const player = isX ? 'X' : 'O'
	let location = [i]

	// Major Diagonal
	while (
		(squares[yDown * size + xDown] === player || squares[yUp * size + xUp] === player) &&
		(xDown >= 0 || xUp <= size - 1) &&
		(yDown >= 0 || yUp <= size - 1)
	) {
		if ((xDown < 0 || yDown < 0) && (xUp > size - 1 || yUp > size - 1)) break
		if (squares[yDown * size + xDown] === player) {
			location.push(yDown * size + xDown)
			count = count + 1
			xDown = xDown - 1
			yDown = yDown - 1
		}
		if (squares[yUp * size + xUp] === player) {
			location.push(yUp * size + xUp)
			count = count + 1
			xUp = xUp + 1
			yUp = yUp + 1
		}
		if (count === 4) return { player, location }
	}
	count = 0
	location = [i]
	xUp = x + 1
	yUp = y + 1
	xDown = x - 1
	yDown = y - 1

	// Sub Diagonal
	while (
		(squares[yDown * size + xUp] === player || squares[yUp * size + xDown] === player) &&
		(xDown >= 0 || xUp <= size - 1) &&
		(yDown >= 0 || yUp <= size - 1)
	) {
		if (squares[yDown * size + xUp] === player) {
			location.push(yDown * size + xUp)
			count = count + 1
			xUp = xUp + 1
			yDown = yDown - 1
		}
		if (squares[yUp * size + xDown] === player) {
			location.push(yUp * size + xDown)
			count = count + 1
			xDown = xDown - 1
			yUp = yUp + 1
		}
		if (count === 4) return { player, location }
		if (xDown < 0 && yDown < 0 && xUp > size - 1 && yUp > size - 1) break
	}
	count = 0
	location = [i]
	xUp = x + 1
	yUp = y + 1
	xDown = x - 1
	yDown = y - 1

	// Horizontal
	while (
		(squares[y * size + xDown] === player || squares[y * size + xUp] === player) &&
		(xDown >= 0 || xUp <= size - 1)
	) {
		if (squares[y * size + xDown] === player) {
			location.push(y * size + xDown)
			count = count + 1
			xDown = xDown - 1
		}
		if (squares[y * size + xUp] === player) {
			location.push(y * size + xUp)
			count = count + 1
			xUp = xUp + 1
		}
		if (count === 4) return { player, location }
	}
	count = 0
	location = [i]
	xUp = x + 1
	yUp = y + 1
	xDown = x - 1
	yDown = y - 1

	// Vertical
	while (
		(squares[yDown * size + x] === player || squares[yUp * size + x] === player) &&
		(yDown >= 0 || yUp <= size - 1)
	) {
		if (squares[yDown * size + x] === player) {
			location.push(yDown * size + x)
			count = count + 1
			yDown = yDown - 1
		}
		if (squares[yUp * size + x] === player) {
			location.push(yUp * size + x)
			count = count + 1
			yUp = yUp + 1
		}
		if (count === 4) return { player, location }
	}

	return { player: false }
}

export const getRandomMemes = (memes) => {
	const length = memes.length
	const newMemes = []

	while (newMemes.length < 20) {
		const randomIndex = Math.floor(Math.random() * length)
		if (!newMemes.some((meme) => meme.id === memes[randomIndex].id)) {
			newMemes.push(memes[randomIndex])
		}
	}

	return newMemes
}

export function isSuccess(response) {
	const status = response?.response ? response.response.status : response.status
	return status.toString()[0] === '2'
}

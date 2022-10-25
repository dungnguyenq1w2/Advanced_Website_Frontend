import '../assets/style/index.css'

import React, { useEffect, useState } from 'react'

import MemeList from '../components/MemeList'
import { getRandomMemes } from 'utils/func'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Meme() {
	const [memes, setMemes] = useState([])

	useEffect(() => {
		fetchMemes()
	}, [])

	const fetchMemes = async () => {
		try {
			const res = await axios.get('https://api.imgflip.com/get_memes')
			if (res.data) {
				const randomMemes = getRandomMemes(res.data.data.memes)
				setMemes(randomMemes)
			} else {
				return
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='meme__body'>
			<div>
				<Link to='/'>Back to Home</Link>
				<h1>Random Memes</h1>
			</div>
			<button onClick={fetchMemes}>Fetch Memes</button>
			<MemeList memes={memes} />
			<button onClick={fetchMemes}>Fetch Memes</button>
		</div>
	)
}

export default Meme

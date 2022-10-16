import '../assets/style/index.css'

import React from 'react'
import NavList from '../components/NavList'

const assignments = [
	{
		id: 'btcn01',
		path: 'btcn01',
		name: 'Gomoku',
		description: 'Learn Reactjs by doing Tic Tac Toe game in React tutorial',
	},
	{
		id: 'btcn02',
		path: 'btcn02',
		name: 'Gomoku Refactoring',
		description: 'Refactoring code: Convert Class component to Functional component',
	},
	{
		id: 'btcn03',
		path: 'btcn03',
		name: 'Random Memes',
		description: 'Learn Fetching data by useEffect and build layout to render meme list',
	},
]

function Home() {
	return (
		<div className='home__body'>
			<h1>Assignment Advanced Website 19_3</h1>
			<NavList links={assignments} />
		</div>
	)
}

export default Home

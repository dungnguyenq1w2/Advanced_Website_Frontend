import { Route, Routes } from 'react-router-dom'

import Home from 'modules/home/pages'
import MemeList from 'modules/meme/pages'
import TikTacToe from './modules/tic-tac-toe/pages'

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/btcn01' element={<TikTacToe />} />
			<Route path='/btcn02' element={<TikTacToe />} />
			<Route path='/btcn03' element={<MemeList />} />
		</Routes>
	)
}

export default App

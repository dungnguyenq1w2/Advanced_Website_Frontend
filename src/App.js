import { Route, Routes } from 'react-router-dom'

import Home from 'modules/home/pages'
import MemeList from 'modules/btcn03_meme/pages'
import TikTacToe from 'modules/btcn01_02_tic-tac-toe/pages'
import Registration from 'modules/btcn04_registration/pages'
import Libraries from 'modules/btcn05_libraries/pages'

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/btcn01' element={<TikTacToe />} />
			<Route path='/btcn02' element={<TikTacToe />} />
			<Route path='/btcn03' element={<MemeList />} />
			<Route path='/btcn04/*' element={<Registration />} />
			<Route path='/btcn05/*' element={<Libraries />} />
		</Routes>
	)
}

export default App

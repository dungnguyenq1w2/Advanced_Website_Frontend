import { Routes, Route } from 'react-router-dom'
import TikTacToe from './modules/tic-tac-toe/pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<TikTacToe />} />
			<Route path='/btcn01' element={<div>abc</div>} />
		</Routes>
	)
}

export default App

import { Route, Routes } from 'react-router-dom'

import MLogin from './MLogin'
import MRegister from './MRegister'
import MHome from './MHome'

function Libraries() {
	return (
		<div>
			<Routes>
				<Route path='' element={<MHome />} />
				<Route path='/login' element={<MLogin />} />
				<Route path='/register' element={<MRegister />} />
			</Routes>
		</div>
	)
}

export default Libraries

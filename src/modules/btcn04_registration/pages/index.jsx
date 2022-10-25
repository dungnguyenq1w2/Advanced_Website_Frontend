import { Route, Routes } from 'react-router-dom'

import MLogin from './MLogin'
import MRegister from './MRegister'
import MWelcome from './MWelcome'

function Registration() {
	return (
		<div>
			<Routes>
				<Route path='' element={<MWelcome />} />
				<Route path='/login' element={<MLogin />} />
				<Route path='/register' element={<MRegister />} />
			</Routes>
		</div>
	)
}

export default Registration

import './style.css'

import React from 'react'

const ToggleButton = function ({ isOn }) {
	let classNames = [
		'toggle-button',
		isOn ? 'toggle-button_position-right' : 'toggle-button_position-left',
	].join(' ')
	return <div className={classNames}></div>
}

const Toggle = function ({ isOn, handleToggle }) {
	let classNames = ['switch', isOn ? 'switch_is-on' : 'switch_is-off'].join(' ')
	return (
		<div className={classNames} onClick={handleToggle}>
			<ToggleButton isOn={isOn} />
		</div>
	)
}

export default Toggle

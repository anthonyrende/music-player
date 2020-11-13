import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
	return (
		<div className='player'>
			<div className='time-control'>
				<p>Start Time</p>
				<input type='range' />
				<p>End Time</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon
					className='skip-back'
					size='2x'
					icon={faAngleDoubleLeft}
				/>
				<FontAwesomeIcon className='play' size='2x' icon={faPlayCircle} />
				<FontAwesomeIcon
					className='skip-forward'
					size='2x'
					icon={faAngleDoubleRight}
				/>
			</div>
		</div>
	)
}

export default Player
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	// Ref
	const audioRef = useRef(null)

	// Event Handlers
	const playSongHandler = () => {
		// Note: useRef grabs HTML element by reference, replacing document.queryselector
		if (isPlaying) {
			audioRef.current.pause()
			setIsPlaying(!isPlaying)
		} else {
			audioRef.current.play()
			setIsPlaying(!isPlaying)
		}
	}
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
				<FontAwesomeIcon
					onClick={playSongHandler}
					className='play'
					size='2x'
					icon={faPlayCircle}
				/>
				<FontAwesomeIcon
					className='skip-forward'
					size='2x'
					icon={faAngleDoubleRight}
				/>
			</div>
			<audio ref={audioRef} src={currentSong.audio}></audio>
		</div>
	)
}

export default Player

import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faPlayCircle,
	faPauseCircle,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({
	audioRef,
	currentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	setSongInfo,
}) => {
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

	const getFormatedTime = (time) => {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
	}
	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value
		setSongInfo({ ...songInfo, currentTime: e.target.value })
	}
	return (
		<div className='player'>
			<div className='time-control'>
				<p>{getFormatedTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={setSongInfo.duration ? setSongInfo.duration : 0}
					value={songInfo.currentTime}
					onChange={dragHandler}
					type='range'
				/>
				<p>{getFormatedTime(songInfo.duration)}</p>
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
					icon={isPlaying ? faPauseCircle : faPlayCircle}
				/>
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

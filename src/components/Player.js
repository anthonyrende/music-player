import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faPlayCircle,
	faPauseCircle,
} from '@fortawesome/free-solid-svg-icons'
import { playAudio } from '../util'

const Player = ({
	audioRef,
	currentSong,
	isPlaying,
	setIsPlaying,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
	setCurrentSong,
	activeLibraryHandler,
}) => {
	// Play once audio is loaded
	if (isPlaying) {
		const playPromise = audioRef.current.play()
		if (playPromise !== undefined) {
			playPromise.then((audio) => {
				audioRef.current.play()
			})
		}
	}

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
	// const volumeHandler = (e) => {
	// 	audioRef.cu
	// }
	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		if (direction === 'skip-forward') {
			// Modulus loops to 0 when currentIndex % songs.length
			await setCurrentSong(songs[(currentIndex + 1) % songs.length])
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
		}
		if (direction === 'skip-back') {
			// Go to last song in array, if we hit -1
			if ((currentIndex - 1) % songs.length === -1) {
				setCurrentSong(songs[songs.length - 1])
				playAudio(isPlaying, audioRef)
				return
			}
			setCurrentSong(songs[(currentIndex - 1) % songs.length])
		}
		if (isPlaying) audioRef.current.play()
	}
	// const onEndedHandler = () => if skipTrackHandler("skip-forward")
	return (
		<div className='player'>
			<div className='time-control'>
				<p className='time'>{getFormatedTime(songInfo.currentTime)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
					className='track'
				>
					<input
						value={songInfo.currentTime}
						type='range'
						max={songInfo.duration || 0}
						min={0}
						onChange={dragHandler}
					/>

					<div
						// Animation slider percentage
						style={{
							transform: `translateX(${(songInfo.currentTime /
								songInfo.duration) *
								100}%)`,
						}}
						className='animate-track'
					></div>
				</div>
				<p className='time'>
					{songInfo.duration ? getFormatedTime(songInfo.duration) : '0:00'}
				</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler('skip-back')}
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
					onClick={() => skipTrackHandler('skip-forward')}
					className='skip-forward'
					size='2x'
					icon={faAngleDoubleRight}
				/>
			</div>
		</div>
	)
}

export default Player

// <input
// type='range'
// min={0}
// max={1}
// step={0.02}
// value={volume}
// onChange={volumeHandler}
// />

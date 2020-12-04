import React, { useEffect } from 'react'
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
}) => {
	// UseEffect
	useEffect(() => {
		const newSongs = songs.map((song) => {
			if (song.id === currentSong.id) {
				return {
					...song,
					active: true,
				}
			} else {
				return {
					...song,
					active: false,
				}
			}
		})
		setSongs(newSongs)
		// Play once audio is loaded
		if (isPlaying) {
			const playPromise = audioRef.current.play()
			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					audioRef.current.play()
				})
			}
		}

		// Run everytime currentSong is updated
	}, [currentSong])
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
	const skipTrackHandler = (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		if (direction === 'skip-forward') {
			// Modulus loops to 0 when currentIndex % songs.length
			setCurrentSong(songs[(currentIndex + 1) % songs.length])
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
		playAudio(isPlaying, audioRef)
	}

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
						// Animation percentage styles
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

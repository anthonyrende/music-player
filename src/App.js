import React, { useState, useRef } from 'react'

// Styles
import './styles/app.scss'

// Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library.js'
import Nav from './components/Nav'

// Util
import data from './data.js'
import { playAudio } from './util'

function App() {
	// Ref
	const audioRef = useRef(null)
	// State
	const [songs, setSongs] = useState(data())
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duraction: 0,
		animationPercentage: 0,
	})
	const [libraryStatus, setLibraryStatus] = useState(false)
	// Util
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime
		const duration = e.target.duration
		// Calculate percentage input slider
		const roundedCurrent = Math.round(current)
		const roundedDuration = Math.round(current)
		const animationPercentage = Math.round(
			(roundedCurrent / roundedDuration) * 100
		)
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
		})
	}
	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		await setCurrentSong(songs[(currentIndex + 1) % songs.length])
		playAudio(isPlaying, audioRef)
		return
	}
	return (
		<div className={`App ${libraryStatus ? 'library-active' : ''}`}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				audioRef={audioRef}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
				currentSong={currentSong}
				songs={songs}
				setSongs={setSongs}
				setCurrentSong={setCurrentSong}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}
			></audio>
		</div>
	)
}

export default App

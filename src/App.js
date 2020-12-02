import React, { useState, useRef } from 'react'

// Styles
import './styles/app.scss'

// Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library.js'

// Util
import data from './data.js'

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
	})
	// Util
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime
		const duration = e.target.duration
		setSongInfo({ ...songInfo, currentTime: current, duration })
	}
	return (
		<div className='App'>
			<Song currentSong={currentSong} />
			<Player
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				audioRef={audioRef}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
				currentSong={currentSong}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	)
}

export default App

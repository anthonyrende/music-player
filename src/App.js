import React, { useState } from 'react'

// Styles
import './styles/app.scss'

// Components
import Player from './components/Player'
import Song from './components/Song'

// Util
import data from './data.js'

function App() {
	const [songs, setSongs] = useState(data())
	const [currentSong, setCurrentSong] = useState(songs[0])
	return (
		<div className='App'>
			<Song currentSong={currentSong} />
			<Player />
		</div>
	)
}

export default App

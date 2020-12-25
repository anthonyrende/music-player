import React from 'react'

const Song = ({
	currentSong,
	artistInfoStatus,
	setArtistInfoStatus,
	isPlaying,
}) => {
	const artistInfoHandler = () => {
		setArtistInfoStatus(!artistInfoStatus)
	}
	return (
		<div className='song-container'>
			<img
				className={`${isPlaying ? 'spin-img' : ''}`}
				onClick={artistInfoHandler}
				alt={currentSong.name}
				src={currentSong.cover}
			></img>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	)
}

export default Song

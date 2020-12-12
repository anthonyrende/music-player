import React, { useState, useEffect } from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? 'active-library' : ''}`}>
			<header>
				<h2>Library</h2>
			</header>
			<div className='library-songs'>
				{songs.map((song) => (
					<LibrarySong
						songs={songs}
						setCurrentSong={setCurrentSong}
						song={song}
						key={song.id}
						id={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</div>
		</div>
	)
}

export default Library

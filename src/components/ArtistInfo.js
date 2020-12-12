import React, { useState } from 'react'
import Info from './Info'

const ArtistInfo = ({
	songs,
	currentSong,
	artistInfoStatus,
	setArtistInfoStatus,
}) => {
	return (
		<div
			className={`artist-info-container ${
				artistInfoStatus ? 'active-info' : ''
			}`}
		>
			<Info
				currentSong={currentSong}
				artistInfoStatus={artistInfoStatus}
				setArtistInfoStatus={setArtistInfoStatus}
			/>
		</div>
	)
}

export default ArtistInfo

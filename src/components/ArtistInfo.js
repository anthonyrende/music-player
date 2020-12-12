import React, { useState } from 'react'
import Info from './Info'

const ArtistInfo = ({ songs, currentSong, artistInfoStatus }) => {
	return (
		<div
			className={`artist-info-container ${
				artistInfoStatus ? 'active-info' : ''
			}`}
		>
			<h2>Artist Info</h2>
			<Info currentSong={currentSong} />
		</div>
	)
}

export default ArtistInfo

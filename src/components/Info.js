import React from 'react'

// Images
import Spotify from '../assets/media/spotify.svg'
import AppleMusic from '../assets/media/apple-music.svg'
import Bandcamp from '../assets/media/bandcamp.svg'
import Youtube from '../assets/media/youtube.svg'

const Info = ({ currentSong }) => {
	return (
		<div className='info-container'>
			<div className='artist-info'>
				<p>{currentSong.aboutAlbum}</p>
			</div>
			<h2>Available On</h2>
			<div className='media-container'>
				<a href={currentSong.linksToArtist.spotify} target='_blank'>
					<img src={Spotify} />
				</a>
				<a href={currentSong.linksToArtist.apple} target='_blank'>
					<img src={AppleMusic} />
				</a>
				<a href={currentSong.linksToArtist.bandcamp} target='_blank'>
					<img src={Bandcamp} />
				</a>
				<a href={currentSong.linksToArtist.youtube} target='_blank'>
					<img src={Youtube} />
				</a>
			</div>
		</div>
	)
}

export default Info

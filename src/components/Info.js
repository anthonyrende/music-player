import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Images
import Spotify from '../assets/media/spotify.svg'
import AppleMusic from '../assets/media/apple-music.svg'
import Bandcamp from '../assets/media/bandcamp.svg'
import Youtube from '../assets/media/youtube.svg'

const Info = ({ currentSong, artistInfoStatus, setArtistInfoStatus }) => {
	return (
		<>
			<div className='info-container'>
				<div className='artist-info'>
					<FontAwesomeIcon
						onClick={() => setArtistInfoStatus(!artistInfoStatus)}
						className='close-info'
						size='2x'
						icon={faTimes}
					/>
					<h2>Artist Info</h2>
					<p>{currentSong.aboutAlbum}</p>
				</div>
			</div>

			<div className='media-container'>
				<h2>Available On</h2>

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
		</>
	)
}

export default Info

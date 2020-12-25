import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTimes,
	faLongArrowAltDown,
	faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons'

// Images
import Spotify from '../assets/media/spotify.svg'
import AppleMusic from '../assets/media/apple-music.svg'
import Bandcamp from '../assets/media/bandcamp.svg'
import Youtube from '../assets/media/youtube.svg'

const Info = ({ currentSong, artistInfoStatus, setArtistInfoStatus }) => {
	const [showMoreStatus, setShowMoreStatus] = useState(false)

	// const handleTextExpand = () => {
	// 	// setShowMoreStatus(!showMoreStatus)

	// }
	const showMoreOrLess = showMoreStatus ? 'Read Less' : 'Read More'
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

					<p
						className={`read-more-container ${
							showMoreStatus ? 'expand-container' : 'read-more-container'
						}`}
					>
						{currentSong.aboutAlbum}
					</p>
					<div
						className='more-button'
						onClick={() => setShowMoreStatus(!showMoreStatus)}
					>
						{showMoreOrLess}
						<FontAwesomeIcon
							icon={showMoreStatus ? faLongArrowAltUp : faLongArrowAltDown}
						/>
					</div>

					<div
						className={`media-container ${
							showMoreStatus ? 'hide-media' : 'media-container'
						}`}
					>
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
				</div>
			</div>
		</>
	)
}

export default Info

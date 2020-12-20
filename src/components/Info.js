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
	const [showMoreStatus, setShowMoreStatus] = useState(true)

	// const expandTextHandler = () => {
	// 	setShowMoreStatus(!showMoreStatus)
	// }
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
					<div>
						More
						<FontAwesomeIcon
							className='more-button'
							onClick={() => setShowMoreStatus(!showMoreStatus)}
							icon={faLongArrowAltUp}
						/>
					</div>

					<div
						className={`media-container ${
							showMoreStatus ? 'media-container' : 'hide-media'
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

// <a
// 	id='show-more'
// 	class='show-less'
// 	// href='#show-less'
// 	onClick={() => setShowMoreStatus(!showMoreStatus)}
// >
// 	Read less
// 	<FontAwesomeIcon icon={faLongArrowAltUp} />
// </a>
// <a
// 	id='show-less'
// 	class='show-more'
// 	// href='#show-more'
// 	onClick={() => setShowMoreStatus(!showMoreStatus)}
// >
// 	Read more
// 	<FontAwesomeIcon icon={faLongArrowAltDown} />
// </a>

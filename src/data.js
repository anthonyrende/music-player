import { v4 as uuidv4 } from 'uuid'
function chillHop() {
	return [
		{
			name: 'Beaver Creek',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
			color: ['#205950', '#2ab3bf'],
			id: uuidv4(),
			active: true,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/canaryforest.owe/spotify',
				apple: 'https://chillhop.ffm.to/canaryforest.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/canaryforest.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/canaryforest.owe/youtube',
			},
			aboutArtist:
				'At the beginning of the year, producers Aso, Aviino, and Middle School visited The Netherlands and created a number of songs while in Rotterdam. Some in our studio, others in the trio’s haunted houseboat hotel. The end result is Canary Forest, a five song project that begins in the backyard of our Chillhop HQ and deepens down the creek, over the bridge, and into where the forest expands.',
		},
		{
			name: 'Daylight',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
			color: ['#EF8EA9', '#ab417f'],
			id: uuidv4(),
			active: false,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/dayandnight.owe/spotify',
				apple: 'https://chillhop.ffm.to/dayandnight.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/dayandnight.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/dayandnight.owe/youtube',
			},
			aboutAlbum:
				'Time is split in half. Half day and half night. Aiguille’s cohesive EP begins with the sun: “Daylight” and “Daydream”. We hear birds, running water, the globe in motion. “Day and Night”, the third track, satisfies the symmetry and sees the setting sun. The welcoming of the moon. The project’s final two tracks, “Nightfall” and “Nightglow”, expose the evening. We hear the twilight echoes. The animals active in the trees. It’s a rhythmic experience, enjoying 24 hours in under 15 minutes. ',
		},
		{
			name: 'Keep Going',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
			color: ['#CD607D', '#c94043'],
			id: uuidv4(),
			active: false,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/reflection.owe/spotify',
				apple: 'https://chillhop.ffm.to/reflection.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/reflection.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/reflection.owe/youtube',
			},
			aboutAlbum:
				'Born out of organic collaboration, Swørn pushes the boundaries of instrumental music. Made up of producers Hanz and Laxcity, the two reunited for the seven song EP Reflection. Like 2019’s EP Escapade, the cherry blossoms have returned and so have the bouncing electronic beats, alive and wild, hypnotic and hazey. The best addition to your summer, wherever you are. ',
		},
		{
			name: 'Nightfall',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
			color: ['#EF8EA9', '#ab417f'],
			id: uuidv4(),
			active: false,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/dayandnight.owe/spotify',
				apple: 'https://chillhop.ffm.to/dayandnight.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/dayandnight.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/dayandnight.owe/youtube',
			},
			aboutAlbum:
				'Time is split in half. Half day and half night. Aiguille’s cohesive EP begins with the sun: “Daylight” and “Daydream”. We hear birds, running water, the globe in motion. “Day and Night”, the third track, satisfies the symmetry and sees the setting sun. The welcoming of the moon. The project’s final two tracks, “Nightfall” and “Nightglow”, expose the evening. We hear the twilight echoes. The animals active in the trees. It’s a rhythmic experience, enjoying 24 hours in under 15 minutes. ',
		},
		{
			name: 'Reflection',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
			color: ['#CD607D', '#c94043'],
			id: uuidv4(),
			active: false,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/reflection.owe/spotify',
				apple: 'https://chillhop.ffm.to/reflection.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/reflection.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/reflection.owe/youtube',
			},
			aboutAlbum:
				'Born out of organic collaboration, Swørn pushes the boundaries of instrumental music. Made up of producers Hanz and Laxcity, the two reunited for the seven song EP Reflection. Like 2019’s EP Escapade, the cherry blossoms have returned and so have the bouncing electronic beats, alive and wild, hypnotic and hazey. The best addition to your summer, wherever you are. ',
		},
		{
			name: 'Under the City Stars',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
			color: ['#205950', '#2ab3bf'],
			id: uuidv4(),
			active: false,
			linksToArtist: {
				spotify: 'https://chillhop.ffm.to/canaryforest.owe/spotify',
				apple: 'https://chillhop.ffm.to/canaryforest.owe/apple',
				bandcamp: 'https://chillhop.ffm.to/canaryforest.owe/bandcamp',
				youtube: 'https://chillhop.ffm.to/canaryforest.owe/youtube',
			},
			aboutArtist:
				'At the beginning of the year, producers Aso, Aviino, and Middle School visited The Netherlands and created a number of songs while in Rotterdam. Some in our studio, others in the trio’s haunted houseboat hotel. The end result is Canary Forest, a five song project that begins in the backyard of our Chillhop HQ and deepens down the creek, over the bridge, and into where the forest expands.',
		},
	]
}

export default chillHop

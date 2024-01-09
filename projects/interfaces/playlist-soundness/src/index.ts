// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export interface Artists {
	[i: string]: string[];
}

export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	songs: Song[];
	type: "album";
}

export interface PlayList {
	resolve(): Song[];
	type: "playlist";
}

export type PlaylistItem = Song | Album | PlayList;

export interface UnrollPlaylist {
	artists: Artists;
	songs: string[];
	time: number;
}

export function unrollPlaylist(items: PlaylistItem[]) {
	const artists: Artists = {};
	const songs: string[] = [];
	let time = 0;

	function addSong(song: Song) {
		const songArtists =
			typeof song.artist === "string" ? [song.artist] : song.artist;

		for (const artist of songArtists) {
			artists[artist] ??= [];
			artists[artist].push(song.name);
		}

		time += song.length;
		songs.push(song.name);
	}

	for (const item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;

			case "album":
				item.songs.forEach(addSong);
				break;

			case "playlist":
				item.resolve().forEach(addSong);
				break;
		}
	}

	return { artists, songs, time };
}

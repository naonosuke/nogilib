import { SINGLE_SONGS } from "server/actors/Songs/raw/albums/singles";
import { OTHER_SONGS } from "server/actors/Songs/raw/albums/others";
import { ALBUM_SONGS } from "server/actors/Songs/raw/albums";
import { SongsRawArray } from "server/actors/Songs/models";

export const songsRawArray: SongsRawArray = [
  ...SINGLE_SONGS,
  ...ALBUM_SONGS,
  ...OTHER_SONGS,
];

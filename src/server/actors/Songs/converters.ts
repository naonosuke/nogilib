import { SongResult, SongRaw } from 'server/actors/Songs/models';
import { NO_ARTWORK_IMAGE_SRC } from 'server/constants/paths';
import { SongType } from 'server/actors/Songs/constants/songType';
import {
  DiscographyRawArray,
  DiscographyRawObject,
} from 'server/actors/Discography/models';
import { sortByDate } from 'utils/arrays';

type ConvertSongSingle = (params: {
  songTitle: SongRaw['title'];
  singlesRawArray: DiscographyRawArray;
}) => SongResult['single'];

export const convertSongSingle: ConvertSongSingle = ({
  songTitle,
  singlesRawArray,
}) => {
  for (const single of singlesRawArray) {
    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return {
          title: single.title,
          number: single.number,
        };
      }
    }
  }

  return { title: '', number: '' };
};

type ConvertSongAlbums = (params: {
  songTitle: SongRaw['title'];
  albumsRawArray: DiscographyRawArray;
}) => SongResult['albums'];

export const convertSongAlbums: ConvertSongAlbums = ({
  songTitle,
  albumsRawArray,
}) => {
  const songAlbumsWithRelease: (SongResult['albums'][0] & {
    release: string;
  })[] = [];

  for (const album of albumsRawArray) {
    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        songAlbumsWithRelease.push({
          title: album.title,
          number: album.number,
          release: album.release,
        });
      }
    }
  }

  return sortByDate(
    songAlbumsWithRelease,
    'release',
    'desc'
  ).map(({ title, number }) => ({ title, number }));
};

export const convertSongOtherCds = (params: {
  songTitle: SongRaw['title'];
  otherCdsRawArray: DiscographyRawArray;
}): SongResult['otherCds'] => {
  const songOtherCdsWithRelease: (SongResult['albums'][0] & {
    release: string;
  })[] = [];

  for (const otherCd of params.otherCdsRawArray) {
    for (const otherCdSong of otherCd.songs) {
      if (otherCdSong.title === params.songTitle) {
        songOtherCdsWithRelease.push({
          title: otherCd.title,
          number: otherCd.number,
          release: otherCd.release,
        });
      }
    }
  }

  return sortByDate(songOtherCdsWithRelease, 'release', 'desc').map(
    ({ title, number }) => ({
      title,
      number,
    })
  );
};

type ConvertSongArtwork = (params: {
  songTitle: SongRaw['title'];
  songSingleResult: SongResult['single'];
  songAlbumsResult: SongResult['albums'];
  songOtherCdsResult: SongResult['otherCds'];
  singlesRawObject: DiscographyRawObject;
  albumsRawObject: DiscographyRawObject;
  otherCdsRawObject: DiscographyRawObject;
}) => SongResult['artwork'];

export const convertSongArtwork: ConvertSongArtwork = ({
  songTitle,
  songSingleResult,
  songAlbumsResult,
  songOtherCdsResult,
  singlesRawObject,
  albumsRawObject,
  otherCdsRawObject,
}) => {
  if (songSingleResult.title !== '') {
    const single = singlesRawObject[songSingleResult.title];

    for (const singleSong of single.songs) {
      if (singleSong.title === songTitle) {
        return (
          single.artworks.find(
            artwork => artwork.type === singleSong.inCdType[0]
          )?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  if (songAlbumsResult.length > 0) {
    const oldestSongAlbumTitle = songAlbumsResult.slice().reverse()[0].title;
    const album = albumsRawObject[oldestSongAlbumTitle];

    for (const albumSong of album.songs) {
      if (albumSong.title === songTitle) {
        return (
          album.artworks.find(artwork => artwork.type === albumSong.inCdType[0])
            ?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  if (songOtherCdsResult.length > 0) {
    const oldestSongOtherCdTitle = songOtherCdsResult.slice().reverse()[0]
      .title;
    const otherCd = otherCdsRawObject[oldestSongOtherCdTitle];

    for (const otherCdSong of otherCd.songs) {
      if (otherCdSong.title === songTitle) {
        return (
          otherCd.artworks.find(
            artwork => artwork.type === otherCdSong.inCdType[0]
          )?.url ?? NO_ARTWORK_IMAGE_SRC
        );
      }
    }
  }

  return NO_ARTWORK_IMAGE_SRC;
};

export const convertSongType = (type: SongRaw['type']): SongResult['type'] =>
  type.includes(SongType.Selected) ? SongType.Coupling : type;

type ConvertSongPerformersTag = (params: {
  songType: SongRaw['type'];
  songSingleResult: SongResult['single'];
  songAlbumsResult: SongResult['albums'];
  songOtherCdsResult: SongResult['otherCds'];
  songPerformers: SongRaw['performers'];
  albumsRawObject: DiscographyRawObject;
  otherCdsRawObject: DiscographyRawObject;
}) => SongResult['performersTag'];

export const convertSongPerformersTag: ConvertSongPerformersTag = params => {
  const {
    songType,
    songSingleResult,
    songAlbumsResult,
    songOtherCdsResult,
    songPerformers,
    albumsRawObject,
    otherCdsRawObject,
  } = params;

  let singleNumber = '';
  let album: SongResult['performersTag']['album'] = {
    type: null,
    number: null,
  };

  if (songType === SongType.Selected12) {
    return {
      name: 'selected',
      singleNumber: '12',
      album: {
        type: 'single',
        number: '12',
      },
    };
  }

  if (songSingleResult.number !== '') {
    singleNumber = songSingleResult.number;
    album = {
      type: 'single',
      number: songSingleResult.number,
    };
  } else if (songOtherCdsResult.length > 0) {
    const oldestSongOtherCdTitle = songOtherCdsResult.slice().reverse()[0]
      .title;

    album = {
      type: 'digital',
      number: otherCdsRawObject[oldestSongOtherCdTitle].number,
    };
  } else if (songAlbumsResult.length > 0) {
    const oldestSongAlbumTitle = songAlbumsResult.slice().reverse()[0].title;

    singleNumber = albumsRawObject[oldestSongAlbumTitle].previousSingleNumber;
    album = {
      type: 'album',
      number: albumsRawObject[oldestSongAlbumTitle].number,
    };
  }

  if (songType === SongType.Unit) {
    return { name: songPerformers.unit, singleNumber, album };
  }
  if (songType === SongType.FirstGeneration) {
    return { name: 'first generation', singleNumber, album };
  }
  if (songType === SongType.SecondGeneration) {
    return { name: 'second generation', singleNumber, album };
  }
  if (songType === SongType.ThirdGeneration) {
    return { name: 'third generation', singleNumber, album };
  }
  if (songType === SongType.FourthGeneration) {
    return { name: 'fourth generation', singleNumber, album };
  }
  if (
    songType === SongType.Title ||
    songType === SongType.Selected ||
    songType === SongType.Lead
  ) {
    return { name: 'selected', singleNumber, album };
  }
  if (songType === SongType.Under) {
    return { name: 'under', singleNumber, album };
  }

  return {
    name: '',
    singleNumber,
    album,
  };
};

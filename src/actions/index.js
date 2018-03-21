export function selectArtist(artist) {
  // console.log('Un artista ha sido seleccionado',  artist.name);
  return {
    type: 'ARTIST_SELECTED',
    payload: artist
  }
}
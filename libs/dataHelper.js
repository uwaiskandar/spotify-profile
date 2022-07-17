export function getGenreFromArtists(artists = []) {
  let data = []
  artists.forEach((artist) => {
    artist.genres.forEach(genre => {
      if(data.indexOf(genre) < 0) data.push(genre)
    })
  })
  return data
}

export function tokenExpiredHandler() {
  window.localStorage.deleteItem('spotifyAuthToken')
  window.location = '/'
}
export const getRedirectUrl = ({ clientID, scopes, redirectUrl }) => {
  return (
    'https://accounts.spotify.com/authorize?response_type=token' +
    `&client_id=${clientID}` +
    `&scope=${scopes.join('%20')}` +
    `&redirect_uri=${redirectUrl}` +
    '&show_dialog=true'
  )
}

export const userScopes = [
  'user-read-private',
  'user-read-email',
  'user-top-read'
]

export function logout() {
  window.localStorage.removeItem('spotifyAuthToken')
  window.location = '/'
}
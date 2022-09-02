import Axios from 'axios'

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

export function handleLogin(event) {
  let clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENTID ?? ''
  let redirectUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'
  event.preventDefault()

  const redirectUri = getRedirectUrl(
    {
      clientID,
      scopes: userScopes,
      redirectUrl,
    }
  )

  if (window.location !== window.parent.location) {
    const loginWindow = window.open(redirectUri)
    window.addEventListener('message', (event) => {
      if (event.data.type !== 'react-spotify-auth' || !event.data.accessToken) {
        return
      }

      loginWindow.close()
    }, false)
  } else {
    window.location = redirectUri
  }
}
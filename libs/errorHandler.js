
export function spotifyErrorHandler(error) {
  console.log(error)
  console.log('response code', error.response)
  if(error.response && error.response.status === 401) {
    // expired token
    window.localStorage.removeItem('spotifyAuthToken')
    window.location = '/'
  }
}
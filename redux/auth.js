import Axios from 'axios'

export const authLogin = () => (dispatch) => {
  let clientID = process.env.SPOTIFY_CLIENTID
  let clientSecret = process.env.SPOTIFY_SECRET

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  return Axios.post(authOptions)
    .then((res) => res.data)
    .then((data) => {
      const valueToken = data.access_token
      console.log('response login', data)
      // localStorage.setItem(nameToken, valueToken)
      // localStorage.setItem(
      //   `${process.env.STORAGE_PREFIX}USER`,
      //   JSON.stringify(data)
      // )

      // dispatch(
      //   showMessage(
      //     locale == 'id' ? 'Berhasil Login' : 'Successfully Login',
      //     'success'
      //   )
      // )
      // return dispatch(resultLogin(data))
    })
    .catch((error) => {
      console.log(error)
      // const { message } = parseError(error)

      // dispatch(showMessage(message, 'danger'))
      // return dispatch(resultLogin(null))
    })
}
  
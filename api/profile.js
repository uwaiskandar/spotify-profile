import Axios from 'axios'
import { tokenExpiredHandler } from '../libs/tokenExpiredHandler'

const SPOTIFY_API = process.env.NEXT_PUBLIC_SPOTIFY_API

export async function getProfile() {
  let token = window.localStorage.spotifyAuthToken
  let options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await Axios.get(`${SPOTIFY_API}/me`, options)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
    // tokenExpiredHandler()
  })
}
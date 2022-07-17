import Axios from 'axios'
import { tokenExpiredHandler } from '../libs/tokenExpiredHandler'

const SPOTIFY_API = process.env.NEXT_PUBLIC_SPOTIFY_API

export async function getTopItems({ type = 'artists', timeRange = '', limit = 10 }) {
  let token = window.localStorage.spotifyAuthToken
  let options = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      time_range: timeRange,
      limit
    }
  }
  let topItems = await Axios.get(`${SPOTIFY_API}/me/top/${type}`, options)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
      // tokenExpiredHandler()
    })
  return topItems
}
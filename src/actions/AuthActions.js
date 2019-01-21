import API_URL from '../assets/ApiUrl'
import HEADERS from '../assets/AuthorizationHeaders'
import { UPDATE_AUTHORIZATION, LOGOUT_USER } from '../assets/ActionTypes'

export function fetchAuthorization(code) {
  return (dispatch) => {
    return fetch(`${API_URL}spotifyusers?code=${code}`, {
      method: 'POST',
      headers: HEADERS
    })
    .then(response => response.json())
    .then(console.log)
    // .then(data => {
    //   // Save JWT in local storage, then update auth in store
    //   localStorage.setItem('jwt', data.jwt)
    //   return dispatch({type: UPDATE_AUTHORIZATION, payload: {user:data.user}})
    // })
  }
}

import axios from 'axios'
import {
  IS_FETCHING,
  GET_URL_DATA,
  SUBMIT_URL
} from './types'

export function changeFetchState(fetchState) {
  return {
    type: IS_FETCHING,
    payload: fetchState
  }
}


export function submitURL(url) {
  return function(dispatch) {
    dispatch(changeFetchState(true))

    setTimeout(() => {
      dispatch(changeFetchState(false))
    }, 1000)
  }
}

export function getUrlData() {
  const results = axios.get('/api/links')
  return {
    type: GET_URL_DATA,
    payload: results
  }
}

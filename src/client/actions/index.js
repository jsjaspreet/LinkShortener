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

export function postUrl(link) {
  const result = axios.post('/api/links', { link })
  return {
    type: SUBMIT_URL,
    payload: result
  }
}


export function submitURL(url) {
  return function(dispatch) {
    dispatch(changeFetchState(true))

    setTimeout(() => {
      dispatch(postUrl(url))
      // Janky way of waiting for the PG write to be committed
      // better to do optimistic UI updates
      setTimeout(()=> {
        dispatch(getUrlData())
        dispatch(changeFetchState(false))
      }, 300)
    }, 800)
  }
}

export function getUrlData() {
  const results = axios.get('/api/links')
  return {
    type: GET_URL_DATA,
    payload: results
  }
}

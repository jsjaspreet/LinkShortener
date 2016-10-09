import { GET_URL_DATA } from '../../actions/types'

export default function(state = [], { type, payload }) {
  switch (type) {
  case GET_URL_DATA:
    return payload.data
  default:
    return state
  }
}
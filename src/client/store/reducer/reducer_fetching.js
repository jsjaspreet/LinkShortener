import { IS_FETCHING } from '../../actions/types'

export default function(state = false, { type, payload }) {
  switch (type) {
  case IS_FETCHING:
    return payload
  default:
    return state
  }
}

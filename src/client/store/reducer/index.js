// third party imports
import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import fetchReducer from './reducer_fetching'
import urlDataReducer from './reducer_url_data'

// combine and export the reducers
export default combineReducers({
  form: formReducer,
  isFetching: fetchReducer,
  urlData: urlDataReducer
})

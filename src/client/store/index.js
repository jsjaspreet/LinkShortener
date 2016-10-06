// third party imports
import {createStore as createReduxStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
// local imports
import DevTools from "../components/DevTools"
import reducer from "./reducer"

// export a store with no initial data
export function createStore() {
  return createReduxStore(
    reducer,
    // store enhancers go here
   compose(
        DevTools.instrument()
    ),
    applyMiddleware(thunk)
  )
}

export default createStore()

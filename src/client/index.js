// third party imports imports
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// local imports
import store from "./store"
import DevTools from "./components/DevTools"

// render the routed application
ReactDOM.render(
  <Provider store={store}>
    <div style={{
      display: "flex",
      height: "100%"
    }}>
      <div>
        REACT APP
      </div>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById("app")
)

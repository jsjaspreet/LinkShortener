// third party imports imports
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// local imports
import store from "./store"
import App from "./components/App"

// render the routed application
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
)

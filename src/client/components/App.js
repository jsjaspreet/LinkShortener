import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import UrlInput from './UrlInput'
import LinkTable from './LinkTable'
import { getUrlData } from '../actions/index'
import store from '../store'

class App extends Component {
  componentWillMount() {
    setInterval(()=>store.dispatch(getUrlData()), 1000)
  }

  render() {
    return (
      <div>
        <AppBar
          title="Link Shortener"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <UrlInput/>
        <LinkTable/>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'

import NavigationContainer from "containers/Navigation/NavigationContainer"
import FeedContainer from "containers/Feed/FeedContainer"

import "./App.sass"

class App extends Component {

  props: Props;

  render() {
    return (
      <div className="App">
        <FeedContainer />
        <NavigationContainer />
      </div>
    )
  }
}

export default App

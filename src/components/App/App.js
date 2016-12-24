import React, { Component } from 'react'

import NavigationContainer from "containers/Navigation/NavigationContainer"

class App extends Component {

  props: Props;

  render() {
    return (
      <div className="App">
        <NavigationContainer />
      </div>
    )
  }
}

export default App

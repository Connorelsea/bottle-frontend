import React, { Component } from 'react'

import { Match } from "react-router"

import NavigationContainer from "containers/Navigation/NavigationContainer"
import FeedContainer from "containers/Feed/FeedContainer"
import Header from "components/Header/Header"

import Posts from "pages/Posts"
import Chat from "pages/Chat"
import Profile from "pages/Profile"

import "./App.sass"

class App extends Component {

  props: Props;

  render() {
    return (
      <div className="App">

        <Header />

        <div className="App__Content">
          <Match pattern="/" exactly component={FeedContainer} />
          <Match pattern="/posts" component={Posts} />
          <Match pattern="/chat" component={Chat} />
          <Match pattern="/profile" component={Profile} />
        </div>

        <NavigationContainer />

      </div>
    )
  }
}

export default App

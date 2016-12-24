import React, { Component } from 'react'
import { Match, Miss, Link, Redirect } from "react-router"

import Login from "../Login/Login"

import Navigation from "../Navigation/Navigation"

type Props = {
  doLogin: func,
  doAuthentication: func,
};

const AuthAccepted = () =>
  <div>
    <Navigation />

    <Match exactly pattern="/"         component={Dashboard} />
    <Match exactly pattern="/meetings" component={Meetings} />
    <Match exactly pattern="/parking"  component={Parking} />

    <div>Logout</div>

    <Miss component={Missing} />
  </div>

class App extends Component {

  props: Props;

  render() {
    return (
      <div className="App">
        App rendering
      </div>
    )
  }
}

export default App

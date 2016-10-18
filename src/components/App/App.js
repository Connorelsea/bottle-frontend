import React, { Component } from 'react'
import { Match, Miss, Link, Redirect } from "react-router"

import { isAuth, getAuthInfo, processLogout } from "../../utils/login-utils"
import Login from "../Login/Login"

import AuthService from "../../utils/AuthService"

import Navigation from "../Navigation/Navigation"

type Props = {
  doLogin: func,
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

const AuthRejected = ({ doLogin }: { doLogin: func }) =>
  <div>
    <Login
      doLogin={doLogin}
    />
    <Match pattern="/hello" component={() => <p>Hello</p>} />
  </div>

class App extends Component {

  props: Props;

  render() {
    return (
      <div className="App">
        {/*auth.loggedIn() ? <AuthAccepted /> : <AuthRejected doLogin={doLogin}/>*/}
        <AuthRejected doLogin={this.props.doLogin}/>
        <Link to="/hello">GO to hello</Link>
      </div>
    )
  }
}

export default App

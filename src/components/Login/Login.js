import React, { Component } from "react"

import "./Login.scss"
import logo from "../../images/logo.svg"

class Login extends Component {

  props: Props;

  render() {
    return (
      <div className="Login">

        <div className="Login--Header">

          <div className="Login--Header--Top">
            <img className="Login--Header--Logo" src={logo} alt="Bottle Logo" />
            <h1 className="Login--Header--Title">Bottle</h1>
          </div>

          <p className="Login--Header--Text Login--Header--Text__Upper">
            Not Logged In
          </p>

          <p className="Login--Header--Text Login--Header--Text__Lower">
            Log in using Facebook or Twitter to continue.
          </p>

        </div>

        <button onClick={this.props.doLogin}>Login Here</button>

      </div>
    )
  }
}

export default Login

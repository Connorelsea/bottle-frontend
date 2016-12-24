import React, { Component } from 'react'

import { connect } from 'react-redux'
import DevTools from "../../redux/utils/devtools"

import { doLogin, doAuthentication } from "../../redux/ducks/AuthLock"

import { hasUser } from "../../utils/login"

import App from "../../components/App/App"
import Login from "../../components/Login/Login"

type Props = {
  store: object,
  doLogin: func,
  doAuthentication: func,
  loggedIn: boolean,
};

class AppContainer extends Component {

  componentDidMount() {
    this.props.doAuthentication()
  }

  props: Props;

  render() {
    return (
      <div className="App-Container">

        {hasUser()
          ? <App doAuthentication={this.props.doAuthentication} />
          : <Login doLogin={this.props.doLogin} /> }

        <DevTools />

      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.AuthLock.loggedIn,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {

    doLogin: () => {
      dispatch(doLogin())
    },

    doLogout: () => {

    },

    doAuthentication: () => {
      dispatch(doAuthentication())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

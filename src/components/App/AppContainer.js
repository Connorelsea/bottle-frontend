import React, { Component } from 'react'

import { Provider } from "react-redux"
import { connect } from 'react-redux'
import DevTools from "../../redux/devtools"

import { doLogin, doAuthentication } from "../../redux/ducks/AuthLock"

import App from "./App"

type Props = {
  store: object,
  doLogin: func,
  doAuthentication: func,
};

class AppContainer extends Component {

  props: Props;

  constructor(props) {
    super(props)

    props.doAuthentication()
  }

  render() {
    return (
      <div className="AppContainer">
        <Provider store={this.props.store} >
          <div>

            <App
              doLogin={this.props.doLogin}
            />

            <DevTools />

          </div>
        </Provider>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    pathname: state.location && state.location.pathname
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

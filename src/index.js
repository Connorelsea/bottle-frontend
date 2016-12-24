import React    from 'react'
import ReactDOM from 'react-dom'

import AppContainer from "./containers/App/AppContainer"
import "./styles/index.scss"

import { Provider } from "react-redux"
import configureStore from "./redux/utils/store"

import Router from "./containers/Router/RouterContainer"

import { Match, Miss, Link, Redirect } from "react-router"

const store = configureStore()

ReactDOM.render(
  <div>
    <Provider store={store} >
      <Router>

        <AppContainer />

      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)

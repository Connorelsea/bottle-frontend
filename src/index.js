import React    from 'react'
import ReactDOM from 'react-dom'

import Router from "containers/Router/RouterContainer"
import AppContainer from "containers/App/AppContainer"

import "styles/index.css"

import { Provider } from "react-redux"
import configureStore from "redux/utils/store"

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

if (module.hot) {
  module.hot.accept()
}

import React    from 'react'
import ReactDOM from 'react-dom'

import App from "./components/App/App"
import "./styles/index.scss"

import configureStore from "./redux/store"

import Router from "./components/Router/Router"

const store = configureStore()

ReactDOM.render(
  <div>
    <Router store={store} />
  </div>,
  document.getElementById('root')
)

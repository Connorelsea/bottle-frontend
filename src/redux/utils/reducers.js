import { combineReducers } from 'redux'

import AuthLock from "../ducks/AuthLock"
import Router   from "../ducks/Router"

export default combineReducers({
  AuthLock,
  Router,
})

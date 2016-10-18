import { combineReducers } from 'redux'

import Location from "./ducks/Location"
import AuthLock from "./ducks/AuthLock"

export default combineReducers({
  Location,
  AuthLock,
})

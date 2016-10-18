import { LOCK_SUCCESS } from "./AuthLock"

//Action Types
export const LOCATION_CHANGE = "location/change"

// Default State
const defaultState = {
  location: window.location
}

// Reducer
export default function reducer(state = defaultState, action) {

  console.log(action)

  switch (action.type) {

    case LOCATION_CHANGE:
      return { location: action.location }

    default:
      return state;

  }
}

// Action Creators
export const setLocation = (location) => ({
  type: LOCATION_CHANGE,
  location: location,
})

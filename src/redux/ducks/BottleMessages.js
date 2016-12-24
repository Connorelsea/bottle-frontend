import { batchActions } from 'redux-batched-actions'

//Action Types
export const LOCK_SHOW    = "auth/lock/show"

// This will update the current in the store and update the
// "last seen ID". Then new API calls will call with a lower boundary of
// the last seen ID
export const UPDATE_CURRENT

export const UPDATE_DISPLAY_SECTION

export const GET_MESSAGES_REQUEST
export const GET_MESSAGES_SUCCESS
export const GET_MESSAGES_FAILURE

// Default State
const defaultState = {

}

// Reducer
export default function reducer(state = defaultState, action) {

  switch (action.type) {

  }

}


// Action Creators
export const showLock = () => ({
  type: LOCK_SHOW,
})

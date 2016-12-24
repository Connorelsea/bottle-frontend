import { batchActions } from 'redux-batched-actions'

//Action Types
export const LOCK_SHOW    = "auth/lock/show"

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

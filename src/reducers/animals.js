import * as types from '../types/animals'

const INITIAL_STATE = {
  animals: [],
  loading: false,
  error: false
}

export default function animals (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_ALL_ANIMALS:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS_GET_ALL_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        loading: false,
        error: false
      }
    case types.FAILED_GET_ALL_ANIMALS:
      return {
        ...state,
        animals: [],
        loading: false,
        error: true
      }

    default:
      return state
  }
}

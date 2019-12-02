import * as types from '../types/animals'

const INITIAL_STATE = {
  loading: false,
  error: false,
  animal: {}
}

export default function animal (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_ANIMAL_DETAILS:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS_GET_ANIMAL_DETAILS:
      return {
        ...state,
        animal: action.payload,
        loading: false,
        error: false
      }
    case types.FAILED_GET_ANIMAL_DETAILS:
      return {
        ...state,
        animal: {},
        loading: false,
        error: true
      }
    case types.ADD_ANIMAL:
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.SUCCESS_ADD_ANIMAL:
      return {
        ...state,
        loading: false,
        error: false
      }
    case types.FAILED_ADD_ANIMAL:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

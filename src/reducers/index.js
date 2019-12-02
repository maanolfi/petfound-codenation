import { combineReducers } from 'redux'

import animals from './animals'
import animal from './animal'
import users from './users'

export default combineReducers({
  animals,
  animal,
  users
})

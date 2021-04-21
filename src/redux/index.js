import { combineReducers } from 'redux'
import fetchUsers from "./fetchReducer";
export default combineReducers({
users:fetchUsers
})
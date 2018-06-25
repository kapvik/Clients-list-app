import { combineReducers } from 'redux'
import { RECEIVE_USERS } from '../actions/action-types'

function users(
	state = [],
	action
) {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users
		default:
			return state
	}
}
const rootReducer = combineReducers({
	users,
})

export default rootReducer
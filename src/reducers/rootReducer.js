import { combineReducers } from 'redux'
import { RECEIVE_USERS, SELECT_USER } from '../actions/action-types'

function usersData(
	state = {
		users: [],
		currentUser: null,
		currentUserProfile: []
	},
	action
) {
	switch (action.type) {
		case RECEIVE_USERS:
			return Object.assign({}, state, {users: action.users })
		case SELECT_USER:
			return Object.assign({}, state, {
				currentUser: action.userId,
				currentUserProfile: state.users[action.userId]
			})
		default:
			return state
	}
}
const rootReducer = combineReducers({
	usersData,
})

export default rootReducer
import { RECEIVE_USERS } from './action-types'

export const receiveUsers = users =>({ 
	type: RECEIVE_USERS, 
	users
})

function xhr(callback) {
	const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText)
        }
    }
    xhr.open('GET', 'clients.json', true)
    xhr.send()
}

export function userDataLoad() {
	return dispatch => {
		return xhr((response) => dispatch(receiveUsers(JSON.parse(response))))
	}
}
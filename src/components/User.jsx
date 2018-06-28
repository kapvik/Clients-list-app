import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectedUser} from '../actions'



class User extends Component {

	onClickUser(id) {
		this.props.selectUser(id)
	}

	render() {
		const {users} = this.props.usersData
		return users.map((user, index) => (
			<Item key={index} onClick = {(e) => this.onClickUser(index)}>
				<Item.Image src={user.general.avatar} alt="Client's avatar"/>
				<Item.Content verticalAlign='middle'>
					<Item.Header as='a'>{user.general.firstName} {user.general.lastName}</Item.Header>
				   	<Item.Description>{user.job.title} - {user.job.company}</Item.Description>
				</Item.Content>
			</Item>
		))
	}
}

const mapStateToProps = state => ({
	usersData : state.usersData,
})

const mapDispatchToProps = dispatch => ({
	selectUser: (id) => (
		dispatch(selectedUser(id))
	)
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
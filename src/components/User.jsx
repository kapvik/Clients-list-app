import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'



class User extends Component {
	render() {
		const users = this.props.users
		return users.map((user, index) => (
			<Item key={index}>
				<Item.Image src={user.general.avatar} alt="Client's avatar"/>
				<Item.Content verticalAlign='middle'>
					<Item.Header as='a'>{user.general.firstName} {user.general.lastName}</Item.Header>
				   	<Item.Description>{user.job.title} - {user.job.company}</Item.Description>
				</Item.Content>
			</Item>
		))
	}
}

export default User
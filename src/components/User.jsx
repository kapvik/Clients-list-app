import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'



class User extends Component {
	render() {
		return (
			<Item>
				<Item.Image src="#" alt="Client's avatar"/>
				<Item.Content verticalAlign='middle'>
					<Item.Header as='a'>Firstname Lastname</Item.Header>
					<Item.Description>Job title - Job company</Item.Description>
				</Item.Content>
			</Item>
		)
	}
}

export default User
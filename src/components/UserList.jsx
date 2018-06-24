import React, { Component } from 'react'
import { Item, Grid } from 'semantic-ui-react'


class UserList extends Component {
	render() {
		return(
			<Grid.Row>
				<Grid.Column width={6}>
					<Item.Group link divided>
						
					</Item.Group>
				</Grid.Column>
				<Grid.Column width={10}>
					<Item.Group>
							
					</Item.Group>	
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default UserList
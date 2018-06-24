import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class UserProfile extends Component {
	render() {
		return(
			<Item>
			    <Item.Image floated='left' size={'medium'}  src='#' alt="Client's photo"/>
	      		<Item.Content verticalAlign='middle'>
	        		<Item.Header as='a'>Name Lastname</Item.Header>
	        		<Item.Description>
	        			<p>Job title - Job Company</p>
	        			<p>email: email@example.com</p>
	        			<p>phone: +38050000000</p>
	        			<p>Adress: </p>
		       			<address>
		       				street <br />
		       				city, zipCode <br />
		       				country <br />
		       			</address>
	        		</Item.Description>
	      		</Item.Content>
			</Item>
		)
	}
}

export default UserProfile
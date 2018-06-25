import React, { Component } from 'react'
import { Item, Grid } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { userDataLoad } from '../actions'

import SearchField from './SearchField'
import User from './User'
import UserProfile from './UserProfile'

class UserList extends Component {	

	componentDidMount() {
		this.props.dataLoad()
	}

	render() {
		const users = this.props.users
		return(
			<Grid.Row>
				<Grid.Column width={6}>
					<Item.Group link divided>
						<SearchField />
		    			<User users={users}/>
					</Item.Group>
				</Grid.Column>
				<Grid.Column width={10}>
					<Item.Group>
						<UserProfile />	
					</Item.Group>	
				</Grid.Column>
			</Grid.Row>
		)
	}
}

const mapStateToProps = state => {
	return {
		users : state.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dataLoad: () => dispatch(userDataLoad())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
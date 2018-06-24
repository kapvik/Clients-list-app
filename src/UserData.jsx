import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import UserList from './components/UserList'

class UserData extends Component {
  render() {
    return (
      <Container>
        <Grid celled>
          <UserList />
        </Grid>
      </Container>
    );
  }
}

export default UserData;

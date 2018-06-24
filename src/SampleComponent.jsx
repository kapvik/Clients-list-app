import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	name: state.test.name
})

class SampleComponent extends Component {
	render() {
		const {name} = this.props

		return (
			<div>
				Data from Redux: name - {name}
			</div>
		)	
	}
}

export default connect(mapStateToProps)(SampleComponent)
import React from 'react'

import Container from 'react-bootstrap/Container'

class Footer extends React.Component {
	constructor(props) {
		super(props)

		this.state = { visible: true }
	}

	removeMe = () => {
		console.log('removing')
		this.setState({ visible: false })
	}

	render() {
		return (
			<Container
				onClick={this.removeMe}
				className={`footer ${this.state.visible ? 'visible' : 'invisible'}`}
			>
				<h6>This page was created by Ethan Storm</h6>
			</Container>
		)
	}
}

export default Footer

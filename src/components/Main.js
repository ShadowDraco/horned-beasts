import React from 'react'

import Container from 'react-bootstrap/Container'
import HornedBeast from './HornedBeast'

class Main extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	render() {
		return (
			<Container className='main'>
				{this.props.beasts?.map(beast => {
					return <HornedBeast beast={beast} />
				})}
			</Container>
		)
	}
}

export default Main

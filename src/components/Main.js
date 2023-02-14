import React from 'react'

import HornedBeast from './HornedBeast'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = { theme: 1 }
	}

	changeTheme = () => {
		this.setState({ theme: !this.state.theme })
	}

	render() {
		return (
			<Container fluid className='main'>
				<div className='themebutton'>
					<Button onClick={this.changeTheme}>Change Theme!</Button>
				</div>

				<div className='beastsdisplay'>
					{this.state.theme
						? this.props.beasts?.map((beast, i) => {
								return <HornedBeast key={i} beast={beast} />
						  })
						: this.props.beasts.map((beast, i) => {
								return (
									<Image
										key={i}
										src={beast.image_url}
										alt={`${beast.keyword}`}
										title={beast.keyword}
										fluid
										width={'33%'}
										rounded
									/>
								)
						  })}
				</div>
			</Container>
		)
	}
}

export default Main

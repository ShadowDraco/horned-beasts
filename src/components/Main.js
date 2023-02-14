import React from 'react'

import HornedBeast from './HornedBeast'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = { theme: true, filter: false }
	}

	changeTheme = () => {
		this.setState({ theme: !this.state.theme })
	}

	changeFilter = () => {
		this.setState({ filter: !this.state.filter })
	}

	filterBeasts = beasts => {
		if (!this.state.filter) return this.props.beasts
		let sorted = []
		this.props.beasts.forEach(beast => {
			sorted.push(beast)
		})
		return sorted.sort((a, b) => b.horns - a.horns)
	}

	render() {
		return (
			<Container fluid className='main'>
				<div className='inteactionbuttons'>
					<Button onClick={this.changeTheme}>Change Theme!</Button>
					<Button onClick={this.changeFilter}>Sort!</Button>
				</div>

				<div className='beastsdisplay'>
					{this.state.theme
						? this.filterBeasts().map((beast, i) => {
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

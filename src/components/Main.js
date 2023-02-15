import React from 'react'

import HornedBeast from './HornedBeast'
import BeastImage from './BeastImage'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = { theme: true, filter: false, modalInfo: null }
	}

	changeTheme = () => {
		this.setState({ theme: !this.state.theme })
	}

	changeFilter = () => {
		this.setState({ filter: !this.state.filter })
	}

	removeModal = () => {
		console.log('remove modal')

		this.setState({ modalInfo: null })
	}

	displayModal = beastProp => {
		console.log('display modal')
		console.log(beastProp)
		console.log(this.state.modalInfo)
		this.setState({ modalInfo: beastProp })
	}

	filterBeasts = () => {
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
				<Container className='interaction-buttons'>
					<Button onClick={this.changeTheme}>Change Theme!</Button>
					<Button onClick={this.changeFilter}>Sort!</Button>
				</Container>

				{this.state.modalInfo ? console.log('modal info is there') : ''}

				<Container fluid className='beasts-display'>
					{this.state.theme
						? this.filterBeasts().map((beast, i) => {
								return <HornedBeast key={i} beast={beast} />
						  })
						: this.props.beasts.map((beast, i) => {
								return (
									<BeastImage
										key={i}
										beast={beast}
										displayModal={this.displayModal}
									/>
								)
						  })}
				</Container>
			</Container>
		)
	}
}

export default Main

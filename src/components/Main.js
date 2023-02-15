import React from 'react'

import HornedBeast from './HornedBeast'
import BeastImage from './BeastImage'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

import SelectedBeast from './SelectedBeast'

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: true,
			order: false,
			modalInfo: null,
			searchFilter: '',
			beasts: [...this.props.beasts],
		}
	}

	removeModal = () => {
		console.log('remove modal')

		this.setState({ modalInfo: null })
	}

	displayModal = beastProp => {
		console.log('display modal')
		this.setState({ modalInfo: beastProp })
	}

	changeTheme = () => {
		this.setState({ theme: !this.state.theme })
	}

	changeOrder = () => {
		this.setState({ order: !this.state.order })
	}

	filterBeasts = () => {
		let ordered = [...this.props.beasts]
		let filtered = []
		let sFilter = this.state.searchFilter

		if (this.state.order) ordered.sort((a, b) => b.horns - a.horns)

		filtered = ordered.filter(beast => beast.keyword.includes(sFilter))

		return filtered
	}

	changeSearchFilter = e => {
		this.setState({ searchFilter: e.target.value })
	}

	render() {
		return (
			<Container fluid className='main'>
				<Container className='interaction-buttons'>
					<Button onClick={this.changeTheme}>Change Theme!</Button>
					<Button onClick={this.changeOrder}>Sort!</Button>

					<InputGroup className='mb-3 w-25'>
						<InputGroup.Text id='search-filter'>Animal</InputGroup.Text>
						<Form.Control
							placeholder='Unicorn'
							aria-label='search filter'
							aria-describedby='search-filter'
							value={this.state.searchFilter}
							onChange={this.changeSearchFilter}
						/>
					</InputGroup>
				</Container>

				{this.state.modalInfo ? (
					<SelectedBeast
						beast={this.state.modalInfo}
						show={this.state.modalInfo ? true : false}
						removeModal={this.removeModal}
					/>
				) : (
					''
				)}

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

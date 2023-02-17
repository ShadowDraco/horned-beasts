import React from 'react'

import HornedBeast from './HornedBeast'
import BeastImage from './BeastImage'
import SelectedBeast from './SelectedBeast'
import FilterForm from './FilterForm'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: true,
			horns: 0,
			ordered: false,
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

	setOrdered = value => {
		this.setState({ ordered: value })
	}

	changeOrdered = () => {
		this.setState({ ordered: !this.state.ordered })
	}

	changeHorns = num => {
		this.setState({ horns: num })
	}

	filterByHorns = filteredBeasts => {
		return this.state.horns !== 0
			? filteredBeasts.filter(beast => beast.horns === this.state.horns)
			: filteredBeasts
	}

	filterBeasts = () => {
		let ordered = [...this.props.beasts]
		let filtered = []
		let sFilter = this.state.searchFilter

		if (this.state.ordered) ordered.sort((a, b) => b.horns - a.horns)

		filtered = ordered.filter(beast => beast.keyword.includes(sFilter))

		return this.filterByHorns(filtered)
	}

	changeSearchFilter = e => {
		this.setState({ searchFilter: e.target.value })
	}

	render() {
		return (
			<Container fluid className='main'>
				<Container className='interaction-buttons flex justify-content-center align-items-center'>
					<Button onClick={this.changeTheme}>Change Theme!</Button>

					{this.state.theme ? (
						<>
							<FilterForm
								setOrdered={this.setOrdered}
								changeHorns={this.changeHorns}
							/>

							<Form.Group className='w-50 flex-column'>
								<Form.Label>Filter by name:</Form.Label>
								<Form.Control
									placeholder='Unicorn'
									aria-label='search filter'
									aria-describedby='search-filter'
									value={this.state.searchFilter}
									onChange={this.changeSearchFilter}
									className='w-75'
								/>
							</Form.Group>
						</>
					) : (
						''
					)}
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

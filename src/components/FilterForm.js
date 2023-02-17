import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class FilterForm extends React.Component {
	constructor(props) {
		super(props)

		console.log()
	}

	handleChange = e => {
		e.preventDefault()

		e.target.value === 'order'
			? this.props.setOrdered(true)
			: this.props.setOrdered(false)

		switch (e.target.value) {
			case '1horn':
				this.props.changeHorns(1)
				break
			case '2horn':
				this.props.changeHorns(2)
				break
			case '3horn':
				this.props.changeHorns(3)
				break
			case '100horn':
				this.props.changeHorns(100)
				break

			default:
				this.props.changeHorns(0)
		}
	}

	render() {
		return (
			<Container className='w-50'>
				<Form>
					<Form.Group>
						<Form.Label>Sort by:</Form.Label>
						<Form.Select onChange={this.handleChange}>
							<option>Nothing</option>
							<option value='1horn'>1 Horn</option>
							<option value='2horn'>2 Horns</option>
							<option value='3horn'>3 Horns</option>
							<option value='100horn'>100 Horns</option>
							<option value='order'>Number of Horns</option>
						</Form.Select>
					</Form.Group>
				</Form>
			</Container>
		)
	}
}

export default FilterForm

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
	}

	render() {
		return (
			<Container className='w-50'>
				<Form>
					<Form.Group>
						<Form.Label>Sort by:</Form.Label>
						<Form.Select onChange={this.handleChange}>
							<option></option>
							<option value='order'>Number of Horns</option>
						</Form.Select>
					</Form.Group>
				</Form>
			</Container>
		)
	}
}

export default FilterForm

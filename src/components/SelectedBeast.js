import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

class SelectedBeast extends React.Component {
	constructor(props) {
		super(props)
		console.log()
	}

	render() {
		return (
			<>
				<Modal show={this.props.show} onHide={this.props.removeModal}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.beast.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container className='modal-body-container'>
							<Image
								src={this.props.beast.image_url}
								alt={`${this.props.beast.keyword}`}
								title={this.props.beast.keyword}
								width={'80%'}
								rounded
							/>
							<p>{this.props.beast.description}</p>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.props.removeModal}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default SelectedBeast

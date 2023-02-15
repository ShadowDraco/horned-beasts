import React from 'react'

import Image from 'react-bootstrap/Image'

class BeastImage extends React.Component {
	constructor(props) {
		super(props)

		this.state = { modalActive: false }
	}

	changeModalActive = () => {
		console.log('change modal active')

		!this.modalActive
			? this.props.displayModal(this.props.beast)
			: this.props.removeModal()
		this.setState({ modalActive: !this.state.modalActive })
	}

	render() {
		return (
			<div className='beast-image'>
				<Image
					src={this.props.beast.image_url}
					alt={`${this.props.beast.keyword}`}
					title={this.props.beast.keyword}
					width={'33%'}
					rounded
					onClick={this.changeModalActive}
				/>
			</div>
		)
	}
}

export default BeastImage

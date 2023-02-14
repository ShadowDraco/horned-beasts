import React from 'react'

import Container from 'react-bootstrap/Container'

class HornedBeast extends React.Component {
	render() {
		return (
			<Container className='beast'>
				<h2>{this.props.beast.title}</h2>
				<img
					src={this.props.beast.image_url}
					alt={`${this.props.beast.keyword}`}
					title={this.props.beast.keyword}
					width={200}
				></img>
				<p>{this.props.beast.description}</p>
				<p>
					The {this.props.beast.keyword} has {this.props.beast.horns} horn(s)!
				</p>
			</Container>
		)
	}
}

export default HornedBeast

import React from 'react'

class HornedBeast extends React.Component {
	render() {
		return (
			<div className='beast'>
				<h2>{this.props.title}</h2>
				<img
					src={this.props.url}
					alt={`${this.props.title}`}
					title={this.props.title}
					width={500}
				></img>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default HornedBeast

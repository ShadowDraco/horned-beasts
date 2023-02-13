import React from 'react'

class StretchGoal extends React.Component {
	render() {
		return (
			<div key={this.props.beast._id} className='beast'>
				<h2>{this.props.beast.title}</h2>
				<img
					src={this.props.beast.image_url}
					alt={`${this.props.beast.keyword}`}
					title={this.props.beast.keyword}
				></img>
				<p>{this.props.beast.description}</p>
				<p>
					The {this.props.beast.keyword} has {this.props.beast.horns} horn(s)!
				</p>
			</div>
		)
	}
}

export default StretchGoal

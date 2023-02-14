import React from 'react'

class Favorite extends React.Component {
	constructor(props) {
		super(props)
		console.log()
	}

	render() {
		return <p className='favorite-heart'>❤️ {this.props.value}</p>
	}
}

export default Favorite

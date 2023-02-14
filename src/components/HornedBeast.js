import React from 'react'

import FavoriteHeart from './FavoriteHeart'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
	constructor(props) {
		super(props)

		this.state = { favorites: 0 }
	}

	addFavorite = () => {
		console.log('adding to favorites')

		this.setState({ favorites: this.state.favorites + 1 })
	}

	render() {
		return (
			<div className='beast'>
				<Card style={{ height: '30rem' }}>
					<Card.Img
						variant='top'
						src={this.props.beast.image_url}
						alt={`${this.props.beast.keyword}`}
						title={this.props.beast.keyword}
					/>
					<Card.Body>
						<Card.Title>{this.props.beast.title}</Card.Title>
						<div className='cardtext'>
							<Card.Text>
								{this.props.beast.description}
								<br></br>
								The {this.props.beast.keyword} has {this.props.beast.horns}{' '}
								horn(s)!
							</Card.Text>
							<Button onClick={this.addFavorite} variant='primary'>
								Favorite!
							</Button>
							{this.state.favorites > 0 ? (
								<FavoriteHeart value={this.state.favorites} />
							) : (
								''
							)}
						</div>
					</Card.Body>
				</Card>
			</div>
		)
	}
}

export default HornedBeast

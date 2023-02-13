import React from 'react'
import HornedBeast from './HornedBeast'
import StretchGoal from './StretchGoal'

class Main extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	render() {
		return (
			<div className='main'>
				<HornedBeast
					title='Moose'
					url='https://cdn.britannica.com/57/92857-050-8D5A0A8E/bull-moose-water.jpg'
					description='Moose are very large and strong animals that reside in green forest areas!'
				/>
				<HornedBeast
					title='Bull'
					url='https://i0.wp.com/bitcoinist.com/wp-content/uploads/2018/05/shutterstock_600671159-bull.jpg?zoom=2'
					description='Bulls are found in grassy plains. They are huge, muscular, and temperamental.'
				/>

				{this.props.StretchGoal
					? this.props.StretchGoal.map(beast => {
							return <StretchGoal beast={beast} />
					  })
					: ''}
			</div>
		)
	}
}

export default Main

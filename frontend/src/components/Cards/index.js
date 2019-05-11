import React from 'react'

import './style.css'
import { getCard } from '../../func/methods'
import Card from '../Card'

export default class Cards extends React.Component {
	state = {
		cards: [],
	}

	// componentWillMount() {
	// }

	componentDidMount() {
	    getCard(this)
	}

	render() {
		return (
			<div>
				{/* JSON.stringify(this.state.cards) */}
				<div className="tinder">
					<div className="tinder--status">
						<i className="fa fa-remove"></i>
						<i className="fa fa-check"></i>
					</div>

					<div className="tinder--cards">
						{
							this.state.cards.map((res, i) =>
								<Card name={res.name} location={res.location} time={res.time} link={res.link} key={i} />
							)
						}
					</div>

					<div className="tinder--buttons">
						<button id="nope"><i className="fa fa-remove"></i></button>
						<button id="love"><i className="fa fa-check"></i></button>
					</div>
				</div>
			</div>
		)
	}
}

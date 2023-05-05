import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Articles } from './pages/Articles'

const BigGreenHeading = styled.h1`
	color: green;
	font-size: 96px;
`;

const App = () => {
	constructor(props) {
		super(props)
		this.state = {
			card: {},
			cards: [],
			buttonStatus: true,
			x: 0
		}
	}

	// componentDidMount() {
	// 	axios.get('/related-items')
	// 		.then((response) => {
	// 			this.setState({ cardObjectsArray: response.data[0].items })
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		})
	// }

	nextCard() {
		let rightButton = document.getElementsByClassName('carousel-btn--right')
		rightButton[0].classList.add('carousel-btn-click')
		let leftButton = document.getElementsByClassName('carousel-btn--left')
		leftButton[0].classList.remove('carousel-btn-click')

		this.setState({ x: -1012 })

		setTimeout(() => {
			let leftButton = document.getElementsByClassName('carousel-btn--left')
			console.log(leftButton)
			let rightButton = document.getElementsByClassName('carousel-btn--right')
			leftButton[0].style.display = 'flex'
			rightButton[0].style.display = 'none'
		}, 400)
	}

	previousCard() {
		let rightButton = document.getElementsByClassName('carousel-btn--right')
		rightButton[0].classList.remove("carousel-btn-click")
		let leftButton = document.getElementsByClassName('carousel-btn--left')
		leftButton[0].classList.add("carousel-btn-click")

		this.setState({ x: 0 })

		setTimeout(() => {
			let leftButton = document.getElementsByClassName('carousel-btn--left')
			console.log(leftButton)
			let rightButton = document.getElementsByClassName('carousel-btn--right')
			leftButton[0].style.display = 'none'
			rightButton[0].style.display = 'flex'
		}, 400)
	}

	render() {
		const { cardObjectsArray, cardObject, buttonStatus, x } = this.state;
		return (
			<div id="product-recommendations">
				<aside>
					<div className="cards-slider">
						<div className="people-also-liked">
							People also liked
						</div>
						<div className="cards-slider-wrapper">
							{cardObjectsArray.map((card, index) => <Card key={index} card={card} x={x} />)}
							<button className="carousel-btn carousel-btn--left" onClick={() => this.previousCard()} >
								<FontAwesomeIcon icon={faArrowLeft} size='xs' />
							</button>
							<button className="carousel-btn carousel-btn--right" onClick={() => this.nextCard()} >
								<FontAwesomeIcon icon={faArrowRight} size='xs' />
							</button>
						</div>
					</div>
				</aside>
			</div>
		)
	}
}

export default App

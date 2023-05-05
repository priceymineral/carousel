import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from './pages/Card'
import dummyData from './dummyData.js'

const App = () => {
	// const [card, setCard] = useState({})
	const [cards, setCards] = useState([])
	// const [buttonStatus, setButtonStatus] = useState(true)
	const [x, setX] = useState(0)
	console.log(cards)

	useEffect(() => {
		setCards(dummyData[0].items)
	}, [setCards])

	const nextCard = () => {
		let rightButton = document.getElementsByClassName('carousel-btn--right')
		rightButton[0].classList.add('carousel-btn-click')
		let leftButton = document.getElementsByClassName('carousel-btn--left')
		leftButton[0].classList.remove('carousel-btn-click')

		// this.setState({ x: -1012 })
		setX(-1012)

		setTimeout(() => {
			let leftButton = document.getElementsByClassName('carousel-btn--left')
			console.log(leftButton)
			let rightButton = document.getElementsByClassName('carousel-btn--right')
			leftButton[0].style.display = 'flex'
			rightButton[0].style.display = 'none'
		}, 400)
	}

	const previousCard = () => {
		let rightButton = document.getElementsByClassName('carousel-btn--right')
		rightButton[0].classList.remove("carousel-btn-click")
		let leftButton = document.getElementsByClassName('carousel-btn--left')
		leftButton[0].classList.add("carousel-btn-click")

		// this.setState({ x: 0 })
		setX(0)

		setTimeout(() => {
			let leftButton = document.getElementsByClassName('carousel-btn--left')
			console.log(leftButton)
			let rightButton = document.getElementsByClassName('carousel-btn--right')
			leftButton[0].style.display = 'none'
			rightButton[0].style.display = 'flex'
		}, 400)
	}

	return (
		<div id="product-recommendations">
			<aside>
				<div className="cards-slider">
					<div className="people-also-liked">
						People also liked
					</div>
					<div className="cards-slider-wrapper">
						{cards.map((card, index) => <Card key={index} card={card} x={x} />)}
						<button className="carousel-btn carousel-btn--left" onClick={() => previousCard()} >
							<FontAwesomeIcon icon={faArrowLeft} size='xs' />
						</button>
						<button className="carousel-btn carousel-btn--right" onClick={() => nextCard()} >
							<FontAwesomeIcon icon={faArrowRight} size='xs' />
						</button>
					</div>
				</div>
			</aside>
		</div>
	)
}

export default App

import React from 'react';

const Card = (props) => (
  <div className="cards" style={{ transform: `translateX(${props.x}px)` }}>
    <div className="image-container">
      <img className="image" src={props.card.imageUrl} alt={props.card.imageDescription} />
    </div>
    <div id='info'>
      <h3>
        <div className="brand">{props.card.brand}</div>
        <span className="item-name">{props.card.name}</span>
      </h3>
      <div>
        <div>
          <div className="carousel-ratings">
            <div className="carousel-empty-stars"></div>
            <div className="carousel-full-stars" style={{ width: `${props.card.rating * 20}%` }}>
            </div>
          </div>
          <span className="number-of-ratings-container">
            <span className="number-of-ratings">{`(${props.card.numberOfRatings})`}</span>
          </span>
          <span></span>
        </div>
      </div>
      <div>
        <div className="price-wrapper">
          <span className="price">{`$${props.card.price}`}</span>
        </div>
      </div>
    </div>
  </div>
)

export default Card;
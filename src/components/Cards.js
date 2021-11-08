import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/img-9.jpg'
              text="Explore hidden waterfalls deep inside the Amazon jungle."
              label='Adventure'
              path='/travel-packages'
            />
            <CardItem
              src='images/img-2.jpg'
              text="Cruise the islands of Vanuatu on a private sailboat."
              label='Luxury'
              path='/travel-packages'
            />
            <CardItem
              src='images/img-8.jpg'
              text="Get lost in the desert with a sub-saharan nomadic tribe."
              label='Adventure'
              path='/travel-packages'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

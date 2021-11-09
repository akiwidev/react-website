import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import waterfall from '../images/img-9.jpg'
import cruise from '../images/img-2.jpg'
import desert from '../images/img-8.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Explore hidden waterfalls deep inside the Amazon jungle."
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={cruise}
              text="Cruise the islands of Vanuatu on a private sailboat."
              label='Luxury'
              path='/services'
            />
            <CardItem
              src={desert}
              text="Get lost in the desert with a sub-saharan nomadic tribe."
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

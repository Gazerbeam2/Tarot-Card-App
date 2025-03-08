
import Tilt from 'react-parallax-tilt'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing axios to make HTTP requests

const TarotCard = (cardId) => {
  const[card,setCards] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tarot')
      .then((res) => setCards(res.data))
      .catch((err) => console.error(err));
  }, [cardId]);
}

const Card = ({card}) => {
    return(
        <div>
          <img src={card.image} alt= {card.name} className/>
          <h2>{card.name}</h2>
          <p>{card.reading}</p>
        </div>
    )
}

export default Card

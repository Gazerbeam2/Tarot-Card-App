import React from 'react'
import Tilt from 'react-parallax-tilt'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing axios to make HTTP requests

const Card = () => {
  const [card, setCard] = useState([]);

      useEffect(() => {
          axios.get('http://localhost:3000/api/card')
              .then((response) => {
                  setCard(response.data);
              })
              .catch((error) => {
                  console.error('There was an error fetching the items!', error);
              });
      }, []);

  return (
    <div>
      <h2>{Card.name}</h2>
                    <h3>{Card.Arcana}</h3>
                    <p>Keywords: {Card.Keywords}</p>
                    <p>Keywords: {Card.Reading}</p>

    </div>
  );
};


export default Card

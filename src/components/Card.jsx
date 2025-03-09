
import Tilt from 'react-parallax-tilt'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing axios to make HTTP requests


const TarotCard = ({card}) => {

    return(
        <div>
          <img src={card.image} alt= {card.name}/>
          <h2>{card.name}</h2>
          <p>{card.reading}</p>
        </div>
    )
}


const CardApi = () =>{
  const [cards,setCards] = useState([]);

useEffect(()=> {
  const fetchCards = async() => {
    try{
      const response = await axios.get('api/card');
      setCards(response.data);
      console.log(typeof response);
      console.log(response);
      console.log(response.data)
    } catch (error){
      console.error('Error fetching cards:',error);
    }
  };
    fetchCards();
},[]);


return(
  <div>
      <ul>
        {cards.map(card => (
          <li key={card._id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default CardApi

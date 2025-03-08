import React, { useState, useEffect } from "react";
import Card from '/src/components/Card.jsx';
import axios from "axios";


function App() {

  return (
    <div>
      {card.map((cards) =>(
        <TarotCard key={card._id} card={card} />
        ))}
    </div>

  )
}

export default App

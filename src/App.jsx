import React, { useState, useEffect } from "react";
import Card from '.'
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(()) => {
    axios.get("/api")
  }



  return (
    <div>
        <head>
          <title>Tarot Card App</title>
        </head>
        <body>
              <h1>Daily Tarot</h1>
              <h2>{Card.name}</h2>
              <h3>{Card.Arcana}</h3>
              <p>Keywords: {Card.Keywords}</p>
              <p>Keywords: {Card.Reading}</p>
              <img src="" alt="" />

        </body>
    </div>

  )
}

export default App

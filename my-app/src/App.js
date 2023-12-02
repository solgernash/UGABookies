import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import Instructions from './Components/instructions';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Authenticated' element={<AuthPage />} />
          <Route path='/instructions' element={<Instructions />} />
          <Route path='/Basketball' element={<BasketballBet />} />
          <Route path='/Football' element={<FootballBet />} />
          <Route path='/Ultimate_Frisbee' element={<UltimateFrBet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

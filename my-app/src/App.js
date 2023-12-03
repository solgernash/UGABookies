import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import UserContext from './Components/context/UserContext';

const server = require('./backend/server');

const App = () => {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <UserContext.Provider value ={{userData, setUserData}}>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/Authenticated' element={<AuthPage />} />
            <Route path='/Basketball' element={<BasketballBet />} />
            <Route path='/Football' element={<FootballBet />} />
            <Route path='/Ultimate_Frisbee' element={<UltimateFrBet />} />
            <Route path ='/signup' element={<Signup />} />
            <Route path ='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  )
};


export default App;
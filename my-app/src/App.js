import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import UserContext from './Components/context/UserContext';

const Server = require('./server');

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3000/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);



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
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  )
};


export default App;
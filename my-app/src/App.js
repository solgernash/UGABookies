import './App.css';
import users from './routes/api/users';
import User from './models/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import UserContext from './Components/context/UserContext';


const users = require('./routes/api/users');
app.use('/routes/api/users', users);

//mongo hookup
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');

//connect database
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended:false}));

const conn_str = 'mongodb+srv://ethanapplecarroll:fortniteisthebestgame@cluster0.xnydhlh.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
  .then(() => {
    app.listen(port);
    console.log('MongoDB Connection Succeeded...');
  })
  .catch (err => {
    console.log('err');
  });

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

};

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
  );
  

export default App;
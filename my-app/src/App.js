import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import Instructions from './Components/instructions';
import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Authenticated' element={<AuthPage />} />
          <Route path='/instructions' element={<Instructions />} />
          <Route path='/Basketball' element={<BasketballBet />} />
          <Route path='/Football' element={<FootballBet />} />
          <Route path='/Ultimate_Frisbee' element={<UltimateFrBet />} />
          <Route path='login' element={<LoginForm />}/>
          <Route path='signup' element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

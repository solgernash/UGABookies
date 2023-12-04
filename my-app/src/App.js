import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import Instructions from './Components/instructions';
import Bets from './Components/myBets';

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
          <Route path='/Bets' element={<Bets />} />
          <Route path='/Ultimate_Frisbee' element={<UltimateFrBet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

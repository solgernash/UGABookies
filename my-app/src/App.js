import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';
import BasketballBet from './Components/BasketballBet';
import FootballBet from './Components/FootballBet';
import UltimateFrBet from './Components/UltimateFrBet';
import Instructions from './Components/instructions';

function App() {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:3000/register', {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}

  return (
    <Router>
      <div>
      
        <h1>This is React WebApp </h1>
        <form action="">
          <input type="text" placeholder="name"
          value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit"
          onClick={handleOnSubmit}>submit</button>
        </form>

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

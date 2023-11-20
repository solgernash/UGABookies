import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AuthPage from './Components/AuthPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Authenticated' element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

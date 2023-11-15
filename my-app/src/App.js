import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './myBets.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BetList from './BetList';

import MatchupList from './MatchupList';
import { DUMMY_PROFILES } from './DUMMY_PROFILES';


const Bets = () => {
    const DUMMY_BETS = [
        {
            name: "team name",
            amount: 20
        },
    ];

    const [betList, setBetList] = useState(DUMMY_BETS);
    const [matchupList, setMatchupList] = useState(DUMMY_PROFILES);
    
  
    return (
       
      <div className="bets-body">
        <nav className="navbar">
          <div className="navbar-buttons">
            <Link to="/Authenticated">
              <button className="back-button">Go Back</button>
            </Link>
          </div>
        </nav>
  
        <h1 className="h1">My Bets</h1>
  
        <BetList users={betList} />
        <MatchupList users={matchupList} />
      </div>
    );
  };

  export default Bets;
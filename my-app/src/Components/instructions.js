import './instructions.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Instructions = () => {
  return (
    <div>
        <nav>
        <div className="navbar-buttons">
        <Link to="/">
        <button className="back-button">Go Back</button> 
        </Link>
            </div>
       
        </nav>
        <div className="playheader">
      <h1>How to Play</h1>
      </div>
      <div className="instruction-boxes">
        <div className="instruction-box">
          <p>Make an initial deposit</p>
        </div>
        <div className="instruction-box">
          <p>Check out today's board to see which matchups are availible to bet on</p>
        </div>
        <div className="instruction-box">
          <p>Pick a team to win and an amount to bet</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
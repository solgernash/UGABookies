import React from 'react';
import './Bet.css'

const Bet = (props) => {
    return (
        <li className='user-item' >
        <div className="user-info">
            <h2>Team Name: {props.name}</h2>
            <h3>Amount Bet: {props.amount}</h3>
        </div>
        </li>
    )
}
export default Bet;
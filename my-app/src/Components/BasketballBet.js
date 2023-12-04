import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MatchupList from "./MatchupList";
import { DUMMY_BASKETBALL } from "./DUMMY_BASKETBALL";
import './BasketballBet.css'
import Card from "./Card";
import BetList from './BetList';
import BasketballForm from "./BasketballForm";


const BasketballBet = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_BASKETBALL);
    const [enteredAmount, setEnteredAmount] = useState('');

    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'Bench Boys', text: 'Bench Boys'},
        {value: 'Brick Layers', text: 'Brick Layers'},
        {value: 'Phi Delt', text: 'Phi Delt'},
        {value: 'ATO', text: 'ATO'},
        {value: "Friend's of Jay-Son", text: "Friend's of Jay-Son"},
        {value: 'Team Setterlind', text: 'Team Setterlind'},
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = event => {
        setSelected(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        console.log(selected);
        console.log(enteredAmount);

        event.preventDefault();
        const userData = {
            name: selected,
            amount: enteredAmount,
        };

        setEnteredAmount('');
        setSelected('');
    }; //submitHandler

    const addUserHandler = (newUser) => {
        setBetList((prevUsersList) => [
            ...prevUsersList, {...newUser},
        ]);
    }

    const DUMMY_BETS = [
        {
            name: "team name",
            amount: 20
        },
    ];

    const [betList, setBetList] = useState(DUMMY_BETS);

    return(
        <>
            <nav className="navbar">
                <img src={require('./bulldog.png')} alt="Logo" className="navbar-logo" />
                <div className="stacked-header">
                    <h1>Bulldawg</h1>
                    <h1>Bookies</h1>
                </div>
                <ul>
                    <li><a href="/today">Today's Board</a></li>
                    <li><a href="/sports">Sports</a></li>
                    <li><a href="/how-to-play">Current Balance: </a></li>
                </ul>
                <div className="navbar-buttons">
                    <Link to="/Authenticated"> 
                        <button className="logout-button">Return</button>
                    </Link>
                </div>
            </nav>
            
            <div>
                <h1 className="Header">Your entry</h1>
                <section className="BetForm"> 
                    <MatchupList users={matchupList} className="teamlist"/>
                    <BasketballForm onAddUser={addUserHandler} />

            
                    <BetList users={betList} />

                </section>
            </div>
        </>
    )
    
};

export default BasketballBet;
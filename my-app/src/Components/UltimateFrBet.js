import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_FRISBEE } from "./DUMMY_FRISBEE";
import MatchupList from "./MatchupList";
import Card from "./Card";

const UltimateFrBet = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_FRISBEE);
    const [enteredAmount, setEnteredAmount] = useState('');

    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'Air Traffic Control', text: 'Air Traffic Control'},
        {value: 'Chick Flix', text: 'Chick Flix'},
        {value: "Daddy's Disk Demons", text: "Daddy's Disk Demons"},
        {value: 'High Flyers', text: 'High Flyers'},
        {value: "Game of Throws", text: "Game of Throws"},
        {value: 'Frisbeasts', text: 'Frisbeasts'},
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
        setEnteredAmount('');
        setSelected('');
    }; //submitHandler

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
                        <button className="logout-button">Logout</button>
                    </Link>
                </div>
            </nav>
            
            <div>
                <h1 className="Header">Your entry</h1>
                <section className="BetForm"> 
                    <MatchupList users={matchupList} className="teamlist"/>

                    <section className="InputBet">
                        <Card className="users">
                        <form onSubmit = {submitHandler}>
                            <div class="custom-select" >
                                <h4>Select a Team</h4>
                                <select value={selected} onChange={handleChange}>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                                <h4> Input Bet Amount</h4>
                                <input class="bet-input" type = "number" placeholder = "25" min = "20" max = "100000" step = "5" value={enteredAmount} onChange={amountChangeHandler} id = "input-form"/>
                                <br/>
                                <button class="button-50" type = "submit" id = "submit-btn">Submit</button>
                            </div>
                        </form>
                        </Card>
                    </section>

                </section>
            </div>
        </>
    )
};

export default UltimateFrBet;
import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { DUMMY_FRISBEE } from "./DUMMY_FRISBEE";
import MatchupList from "./MatchupList";
import Card from "./Card";

const UltimateFrBet = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_FRISBEE);
    const dropdown = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }; //nameChangeHandler

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setEnteredName('');
        setEnteredAmount('');
        dropdown.current.value = "";
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
                            <select ref={dropdown}>
                                <option></option>
                                <option onChange={nameChangeHandler}>Bench Boys vs Brick Layers</option>
                                <option onChange={nameChangeHandler}>Daddy's Disc Demons vs High Flyers</option>
                                <option onChange={nameChangeHandler}>Foot Ballers vs Bench Warmers</option>
                            </select>
                            <div class = "selector">
                                <h4>Type out a matchup</h4>
                                <input type="text" value={enteredName} onChange={nameChangeHandler} />
                            </div>
                            <input type = "number" placeholder = "25" min = "20" max = "100000" step = "5" value={enteredAmount} onChange={amountChangeHandler} />
                            <button type = "submit" id = "submit-btn">Submit</button>
                        </form>
                        </Card>
                    </section>

                </section>
            </div>
        </>
    )

};

export default UltimateFrBet;
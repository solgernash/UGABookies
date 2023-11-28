import React from "react";
import { useState, useRef } from "react";
import MatchupBtns from './MatchupBtns';
import { DUMMY_PROFILES } from './DUMMY_PROFILES';

const BetPlacer = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_PROFILES);
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
            <div class="parlay" id="parlay">
              <a href="Authenticated"><img src={require('./bulldog.png')} alt="Bulldog Logo" class = "parlay-img"></img></a>
              <section> 
                <MatchupBtns users={matchupList}/>
            </section>
              <h1 class = "parlay-h1">Your entry</h1>
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
              
            </div>
        </>
    )

};

export default BetPlacer;
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_FOOTBALL } from "./DUMMY_FOOTBALL";
import MatchupList from "./MatchupList";
import FootballForm from "./FootballForm";
import BetList from './BetList';

const FootballBet = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_FOOTBALL);
    const DUMMY_BETS = [
        {

        },
    ];
    const addUserHandler = (newUser) => {
        setBetList((prevUsersList) => [
            ...prevUsersList, {...newUser},
        ]);
    }

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
                    <FootballForm onAddUser={addUserHandler}/>
                    <BetList users={betList} />
                </section>
            </div>
        </>
    )

};

export default FootballBet;
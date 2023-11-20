import React from "react";
import './Matchup.css'

const Matchup = (props) => {

    return (
        <>
            <li key={props.id} className="user-item">
            <img src={props.img} className="user-img" alt={props.name}/>
            <div>
                <h2>{props.name}</h2>
            </div>
            <img src={props.logo} className="user-img" alt={props.rival}/>
            <div>
                <h2>{props.rival}</h2>
            </div>
            </li>
        </>
    )
};

export default Matchup;
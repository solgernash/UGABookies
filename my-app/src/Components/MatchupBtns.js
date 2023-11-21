import React from "react";
import './MatchupList.css';
import './Matchup.css';
import Card from "./Card";
import Matchup from "./Matchup";

const MatchupList = (props) => {

    return (
        <>
            <Card className="users">
                <ul>
                    {props.users.map((matchup) => (
                        <a href ="BetForm">
                            <Card className="users">
                                <Matchup 
                                    key={matchup.id}
                                    img={matchup.img}
                                    name={matchup.name}
                                    rival={matchup.rival}
                                    logo={matchup.logo}
                                />
                            </Card>
                        </a>
                    ))};
                </ul>
            </Card>
        </>
    )
};

export default MatchupList;
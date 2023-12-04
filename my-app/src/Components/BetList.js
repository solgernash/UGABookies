import React from "react";
import Card from "./Card";
import Bet from "./Bet";
import './BetList.css';
import './Bet.css';

const BetList = (props) => {
    return(
        <Card className="users" >
            <ul>
                {props.users.map((bets) => (
                <Card className="users">
                    <Bet
                        name={bets.name}
                        amount={bets.amount}
                    />
                </Card>
                ))}
            </ul>
        </Card>
    )
}

export default BetList;
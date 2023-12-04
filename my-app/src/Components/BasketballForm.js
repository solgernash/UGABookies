import React from "react";
import './BasketballForm.css';
import { useState } from "react";
import Card from "./Card";


const BasketballForm = ({onAddUser}) => {
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
        onAddUser(userData);
        
        setEnteredAmount('');
        setSelected('');
    }; //submitHandler

    return (
        <>
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
</>
    )
}
export default BasketballForm;
import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MatchupList from "./MatchupList";
import { DUMMY_BASKETBALL } from "./DUMMY_BASKETBALL";
import './BasketballBet.css'
import Card from "./Card";
import $ from 'jquery';


const BasketballBet = (props) => {
    const [matchupList, setMatchupList] = useState(DUMMY_BASKETBALL);
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

    function hook(main, sub) {
        console.log(main, sub)
        var mains = main.children(),
          subs = sub.children().detach()
        main.change(function() {
          var val = $(this).val()
          sub.empty()
          subs.filter("." + val).clone().appendTo(sub)
        }).change()
      }
      
    $(document).ready(function($){
        var options = $('#test2 option');
        $('#test1').on('change', function(e){
            $('#test2').append(options);
            if($(this).val() != 'Select') {
                 $('#test2 option[value!=' + $(this).val() +']').remove();
            } else {
                $('#test2').val('Select');
            }
    
        });
    });

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
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <div>
                <h1 className="Header">Your entry</h1>
                <section className="BetForm"> 
                    <MatchupList users={matchupList} className="teamlist"/>

                    <section className="InputBet">
                        <Card className="users">
                        <form onSubmit = {submitHandler}>
                            <div class="custom-select" >
                                <h4> Select Matchup </h4>
                                <select ref={dropdown} name="test1" id="test1">
                                    <option value="Select">Select Matchup</option>
                                    <option value="a" onChange={nameChangeHandler}>Bench Boys vs Brick Layers</option>
                                    <option value="b" onChange={nameChangeHandler}>Phi Delt vs ATO</option>
                                    <option value="c" onChange={nameChangeHandler}>Friend's of Jay-Son vs Team Setterlind</option>
                                </select>
                                <h4>Select a Team</h4>
                                <select ref={dropdown} name="test2" id="test2">
                                    <option value="Select">Select a Team</option>
                                    <option value="a">Bench Boys</option>
                                    <option value="a">Brick Layers</option>
                                    <option value="b">Phi Delt</option>
                                    <option value="b">ATO</option>
                                    <option value="c">Friend's of Jay-Son</option>
                                    <option value="c">Team Setterlind</option>
                                </select>

                                <input class="form__field" type = "number" placeholder = "25" min = "20" max = "100000" step = "5" value={enteredAmount} onChange={amountChangeHandler} />    
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

export default BasketballBet;
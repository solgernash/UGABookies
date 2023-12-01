import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_PROFILES } from './DUMMY_PROFILES';
import './AuthPage.css'; 

const AuthPage = () => {
    const [matchupList, setMatchupList] = useState(DUMMY_PROFILES);

    const sports = [
        {
            name: 'Basketball',
            image: 'https://th.bing.com/th/id/OIP.Q6F9xbMJZl45pswfQCFOWQHaFj?rs=1&pid=ImgDetMain',
            link: '/basketball', // Replace with basketball route
        },
        {
            name: 'Ultimate',
            image: 'https://th.bing.com/th/id/OIP.IRCfUZYp0Y_ve-LTvArcHwHaEy?w=264&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
            link: '/ultimate_frisbee', // Replace with ultimate route
        },
        {
            name: 'Football',
            image: 'https://th.bing.com/th?id=OIP.bi6AUj9tj5BwnIe2_4x2BwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
            link: '/football', // Replace with football route
        },
    ];

    return (
        <>
            <nav className="navbar">
                <img src={require('./bulldog.png')} alt="Logo" className="navbar-logo" />
                <div className="stacked-header">
                    <h1>Bulldawg</h1>
                    <h1>Bookies</h1>
                </div>
                <ul>
               
                <li><a href="/bets">How to Play</a></li>
                    <li><a href="/sports">Sports</a></li>
                    <li><a href="/bets">My Bets</a></li>
                </ul>
                <div className="navbar-buttons">
                    <Link to="/"> 
                        <button className="logout-button">Logout</button>
                    </Link>
                </div>
            </nav>

            <section>
                <div id="sportsList">
                    {sports.map((sport, index) => (
                        <div key={index}>
                            <img src={sport.image} alt={sport.name} />
                            <Link to={sport.link} className="lookbetter">
                                {sport.name}
                            </Link>
                      
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AuthPage;
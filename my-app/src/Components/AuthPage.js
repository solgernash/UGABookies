import './AuthPage.css';
import { Link } from 'react-router-dom';
import MatchupBtns from './MatchupBtns';
import { useState } from 'react';
import { DUMMY_PROFILES } from './DUMMY_PROFILES';

const AuthPage = () => {
    const [matchupList, setMatchupList] = useState(DUMMY_PROFILES);

    return (
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
                    <Link to="/"> 
                        <button className="logout-button">Logout</button>
                    </Link>
                </div>
            </nav>


            <div class="matchups-container" id="matchupsContainer">
                <script src="popup.js" defer>
                </script>
                <div id="matchupsContent">
                    <h2>Matchups</h2>
                </div>
            </div>

            <section> 
                <MatchupBtns users={matchupList}/>
            </section>
        </>
    )
};

export default AuthPage;
import './AuthPage.css';
import { Link } from 'react-router-dom';

const AuthPage = () => {

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
                <div class="container">
                    <button class="box" id = "basketBtn">
                        <img src={require('./basketball.jpeg')} alt="Basketball" class="sport-pic" />
                        <p>Basketball</p>
                    </button>
                    <button class="box" onclick="showMatchups('football')">
                        <img src={require('./football.jpeg')} alt="Football" class="sport-pic" />
                        <p>Football</p>
                    </button>
                    <button class="box" onclick="showMatchups('frisbee')">
                        <img src={require('./frisbee.jpeg')} alt="Ultimate Frisbee" class="sport-pic" />
                        <p>Ultimate Frisbee</p>
                    </button>
                </div>
                <div id="matchupsContent">
                    <h2>Matchups</h2>
                </div>
            
            </div>
        </>
    )
};

export default AuthPage;
import './Homepage.css';
import { Link } from 'react-router-dom';
import MatchupList from './MatchupList';
import { useState } from 'react';
import { DUMMY_PROFILES } from './DUMMY_PROFILES';

const Homepage = () => {

    const [matchupList, setMatchupList] = useState(DUMMY_PROFILES);

    return (
        <>
        <div className='App'>
            <nav className="navbar">
            <img src={require('./bulldog.png')} alt="Logo" className="navbar-logo" />
            <div className="stacked-header">
                <h1>Bulldawg</h1>
                <h1>Bookies</h1>
            </div>
            <ul>
                <Link to="/instructions">How to Play</Link>
            </ul>
            
            <div className="navbar-buttons">
                <Link to="/signup"> 
                <button className="signup-button">Signup</button>
                </Link>
                <Link to="/login">
                <button className="login-button">Login</button>
                </Link>
            </div>
            </nav>

            <section className="Title">
                <div className="header1">
                    <h3> First IM Fantasy App </h3>
                </div>
                <div className="header2">
                    <h1> GET YOUR FIRST <br></br> DEPOSIT MATCHED <br></br> UP TO <b className="Green">$1000</b> </h1>
                </div>
                <div className="headerImg">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/043/918/original/money-bag-clipart-transparent-background-free-png.png" alt="money bag"></img>
                </div>
                <div className="headerImg2">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/043/918/original/money-bag-clipart-transparent-background-free-png.png" alt="money bag"></img>
                </div>
            </section>

            <section className="Images">
                <img src="https://www.wwlp.com/wp-content/uploads/sites/26/2022/07/Dono-1-copy-1.jpg?strip=1" alt="Ultimate Frisbee"></img>
                <img src="https://www.nsu.edu/NSU/media/Photos/2017/06/Intramural%20Football/TMC-2479-04-Intramural-Football-046.jpg" alt="Football"></img>
                <img src="https://www.keene.edu/ksc/assets/files/38364/ww_intramuralbasketball.standard-landscape.1028x579.jpg?20200323150352" alt="Basketball"></img>
            </section>

            <section className='Matchup'>
                <MatchupList users={matchupList}/>
            </section>
            
        </div>
        </>
    )
};

export default Homepage;
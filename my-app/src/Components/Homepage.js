import './Homepage.css';
import { Link } from 'react-router-dom';
import MatchupList from './MatchupList';
import { useState } from 'react';

const Homepage = () => {
    const DUMMY_PROFILES = [
        {
            id: '001',
            img: 'https://s3.amazonaws.com/file.imleagues/Images/Teams/Uploaded/202310/2023109145717.jpg',
            name: 'Bench Boys',
            rival: 'Bricklayers',
            logo: 'https://s3.amazonaws.com/file.imleagues/Images/Teams/Uploaded/202310/20231010103215.jpg'
        },
        {
            id: '002',
            img: 'https://i.pinimg.com/originals/69/b7/b6/69b7b65ba286543538cc4ff168a3b559.jpg',
            name: "Daddy's Disk Demons",
            rival: 'High Flyers',
            logo: 'https://preview.redd.it/logo-i-made-for-an-ultimate-frisbee-team-i-organize-v0-nuv0jjbjq3ca1.png?width=967&format=png&auto=webp&s=100091275ee137427fa1b2dfebd51d1a2ecf37dd'
        },
        {
            id: '003',
            img: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/24220846/zodiac-football-league-or-scorpio-stingers-by-dan-blessing-dribbble.png',
            name: 'Foot Ballers',
            rival: 'Bench Warmers',
            logo: 'https://d393ynejnklmr1.cloudfront.net/media/profiles/team-1518961869.26122-bench-warmers-fc-anderton.png'
        }
    ];

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
                <li><a href="/today">Today's Board</a></li>
                <li><a href="/sports">Sports</a></li>
                <li><a href="/how-to-play">How to Play</a></li>
            </ul>
            <div className="navbar-buttons">
                <Link to="/Authenticated"> 
                <button className="signup-button">Signup</button>
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
import './AuthPage.css';
import { Link } from 'react-router-dom';
import MatchupList from './MatchupList';
import { useState } from 'react';

const AuthPage = () => {
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

            <section> 
                <MatchupList users={matchupList}/>
            </section>
        </>
    )
};

export default AuthPage;
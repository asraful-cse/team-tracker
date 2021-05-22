import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import logo from '../../images/logo.png';
const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div >
        <div className="header">
            
            <h2>Team Tracker</h2>
            <img src={logo} alt="Team Tracker" />
            <nav>
                {/* <h1>Teams Length: {teams.length}</h1> */}
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </nav>
            </div>
        </div>
    );
};

export default Home;
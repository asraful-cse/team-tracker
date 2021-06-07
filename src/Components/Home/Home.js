import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import logo from '../../images/logo.png';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        
        <div style={{ backgroundColor: "rgb(52 72 80)" }}>
            <div className="jumbotron" style={{ backgroundImage: `url(${logo})`, width: "100%" ,  hight:'100%'}}>
                <div >
                    <h2 className="display-4 font-weight-bold text-center" style={{ color: "#fff", textTransform:'uppercase', fontSize:'40px' }}>Football Team Tracker</h2>
                </div>
            </div>
            <div className="mt-5">
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }

                </div>
            </div>
        </div>
        
    );
};

export default Home;
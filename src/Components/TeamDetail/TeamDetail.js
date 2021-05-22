import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast, faFlag, faFutbol, faTransgender } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css';
import logo from '../../images/logo.png';
import icon1 from '../../icon/Twitter.png';
import icon2 from '../../icon/Facebook.png';
import icon3 from '../../icon/YouTube.png';
import { useParams } from 'react-router';
const TeamDetail = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])
    return (
        <Card >
            <div className="logo"><img src={details.strTeamBadge} alt="newLogo" /></div>
            <div className="image"><img src={logo} alt=" " /></div>
            <div className="main-div">
                <Card.Body style={{ borderRadius: "8px", backgroundColor: 'rgb(57 83 95 / 70%)', marginLeft: '140px', marginRight: '140px', display: 'flex' }}>
                    <Card.Text style={{ color: 'white' }}>
                        <h2 style={{ fontWeight: '800', fontSize: '30px' }}>{details.strAlternate}</h2>
                        <p><FontAwesomeIcon icon={faPodcast} /> Founded: {details.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Spots type: Football</p>
                        <p><FontAwesomeIcon icon={faTransgender} /> Gender: {details.strGender}</p>

                    </Card.Text>
                    <Card.Img className="random" src={details.strTeamFanart3} />
                </Card.Body>
                <div className="description">
                    <p>{details.strStadiumDescription}</p>
                    <br />
                    <p>The English football league system, also known as the football pyramid, is a series of interconnected leagues for men's association football clubs in England, with five teams from Wales, one from Guernsey, one from Jersey and one from the Isle of Man also competing. The system has a hierarchical format with promotion and relegation between leagues at different levels, allowing even the smallest club the theoretical possibility of ultimately rising to the very top of the system. There are more than 140 individual leagues, containing more than 480 divisions.</p>
                </div>
                <div className="icon">
                    <img src={icon1} alt=" " />
                    <img src={icon2} alt=" " />
                    <img src={icon3} alt=" " />
                </div>
                
            </div>
        </Card>

    );
};

export default TeamDetail;
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faFlag, faFutbol, faTransgender} from '@fortawesome/free-solid-svg-icons';



import logo from '../../images/logo.png';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId]);
    const { strTeamBadge, strTeam, strFacebook, strYoutube, strTwitter } = details;
    return (
        < >
            {/* Team Banner and Badge Section */}
            <div style={{ backgroundColor: "rgb(52 72 80)" }}>
                <div className="jumbotron" style={{ backgroundImage: `url(${logo})` }}>

                    <div className="container">
                        <img src={strTeamBadge} alt="" style={{ width: "150px", display: "block", margin: "0 auto"}} />
                    </div>
                </div>

                {/* Summary Card Section */}
                <div className="container mt-5 text-light">
                    <div className="card mb-3" style={{ maxWidth: "100%", borderRadius: "10px", backgroundColor: "rgb(1 48 68 / 63%)" }}>
                        <div className="row no-gutters">
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3 className="card-title font-weight-bold">{strTeam}</h3>
                                    <h2 style={{ fontWeight: '800', fontSize: '30px' }}>{details.strAlternate}</h2>
                                    <p><FontAwesomeIcon icon={faPodcast} /> Founded: {details.intFormedYear}</p>
                                    <p><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</p>
                                    <p><FontAwesomeIcon icon={faFutbol} /> Spots type: Football</p>
                                    <p><FontAwesomeIcon icon={faTransgender} /> Gender: {details.strGender}</p>

                                </div>
                            </div>

                            <div className="col-md-5">
                                <Card.Img src={details.strTeamFanart3} />

                            </div>
                        </div>
                    </div>


                    {/* Paragraph Section */}
                    <div>
                        <p>{details.strStadiumDescription}</p>
                        <br />
                        <p>The English football league system, also known as the football pyramid, is a series of interconnected leagues for men's association football clubs in England, with five teams from Wales, one from Guernsey, one from Jersey and one from the Isle of Man also competing. The system has a hierarchical format with promotion and relegation between leagues at different levels, allowing even the smallest club the theoretical possibility of ultimately rising to the very top of the system. There are more than 140 individual leagues, containing more than 480 divisions.</p>
                    </div>

                    {/* Social Link Section */}
                    <div className="mt-4 py-5 row justify-content-center">
                        <div className="px-4">
                            <a href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: "30px", color: "#1771E6" }} /></a>
                        </div>
                        <div className="px-4">
                            <a href={`http://${strYoutube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ fontSize: "30px", color: "#FF0000" }} /></a>
                        </div>
                        <div className="px-4">
                            <a href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30px", color: "#1DA1F2" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default TeamDetail;
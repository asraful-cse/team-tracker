import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faFlag, faFutbol, faTransgender } from '@fortawesome/free-solid-svg-icons';



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
            <div style={{ backgroundColor: "rgb(31 101 11 / 58%)" }}>
                <div className="jumbotron" style={{ backgroundImage: `url(${logo})`, maxWidth: '100%', objectFit: 'cover', backgroundRepeat: 'no-repeat' }}>

                    <div className="container">
                        <img src={strTeamBadge} alt="" style={{ width: "150px", display: "block", margin: "0 auto" }} />
                    </div>
                </div>

                {/* Summary Card Section */}
                <div className="container mt-5 text-light">
                    <div className="card mb-3" style={{ maxWidth: "100%", borderRadius: "10px", backgroundColor: "rgb(23 100 115)", boxShadow: '-2px 2px 15px 0px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3 className="card-title font-weight-bold" style={{ textTransform: 'uppercase', color: 'yellow' }}>{strTeam}</h3>
                                    <h2 style={{ fontWeight: '800', fontSize: '30px', color: 'rgb(167 164 187 / 86%)' }}>{details.strAlternate}</h2>
                                    <p><FontAwesomeIcon icon={faPodcast} /> Founded: {details.intFormedYear}</p>
                                    <p><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</p>
                                    <p><FontAwesomeIcon icon={faFutbol} /> Spots type: Football</p>
                                    <p><FontAwesomeIcon icon={faTransgender} /> Gender: {details.strGender}</p>

                                </div>
                            </div>

                            <div className="col-md-5" style={{ marginTop: "14px" }}>
                                <Card.Img style={{ borderRadius: '10px' }} src={details.strTeamFanart3} />

                            </div>
                        </div>
                    </div>


                    {/* Paragraph Section */}
                    <div style={{ border: '2px solid #29606b', padding: ' 9px', borderRadius: '10px' }}>
                        <p style={{ fontSize: '15px', textAlign: 'justify', color: '#020508' }}>{details.strStadiumDescription}</p>
                        <br />
                        <p style={{ fontSize: '15px', textAlign: 'justify', color: '#020508' }}>The English football league system, also known as the football pyramid, is a series of interconnected leagues for men's association football clubs in England, with five teams from Wales, one from Guernsey, one from Jersey and one from the Isle of Man also competing. The system has a hierarchical format with promotion and relegation between leagues at different levels, allowing even the smallest club the theoretical possibility of ultimately rising to the very top of the system. There are more than 140 individual leagues, containing more than 480 divisions.</p>
                    </div>

                    {/* Social Link Section */}
                    <div className="mt-4 py-5 row justify-content-center">
                        <div className="px-4">
                            <button style={{ borderRadius: '50px' }}><a href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: "30px", color: "#1771E6" }} /></a></button>
                        </div>
                        <div className="px-4">
                            <button style={{ borderRadius: '50px' }} ><a href={`http://${strYoutube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ fontSize: "30px", color: "#FF0000" }} /></a></button>
                        </div>
                        <div className="px-4">
                            <button style={{ borderRadius: '50px' }}><a href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30px", color: "#1DA1F2" }} /></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default TeamDetail;
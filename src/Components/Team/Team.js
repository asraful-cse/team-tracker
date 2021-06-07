
// import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
  const { strTeamBadge, strTeam, idTeam, strSport } = props.team;

  // const history = useHistory();
  // const handleClick = (teamId) => {
  //   const url = `/team/${teamId}`;
  //   history.push(url);
  // };
  /// button er vetore hobe... onClick={() => handleClick(idTeam)}

  return (

    <Card className="card shadow m-3" style={{ backgroundColor: 'rgb(35 24 107)', borderRadius: '6px', width: '15%'}}>
      <Card.Img variant="down" src={strTeamBadge} style={{maxWidth:'50%', alignItems:'center'}} />
      <Card.Body className='text-center'>
        <Card.Title style={{ color: '#6c8e6c', fontSize: '20px', fontWeight: '700' }}>{strTeam}</Card.Title>
        <Card.Text style={{ color: '#A0A0A0' }}>
          Spots type: {strSport}
        </Card.Text>
        <Link to={`/team/${idTeam}`}>
        {/* <p><small>ID: {idTeam}  <Link to={`/team/${idTeam}`}>click me</Link></small></p>  */}
        <Button variant="primary" >Explore   <FontAwesomeIcon icon={faHandPointRight} style={{ paddingLeft: "4px", }}/></Button>
        </Link>
      </Card.Body>
    </Card>

  );
};

export default Team;

// import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

    <Card className="card shadow m-3" style={{ backgroundColor: 'rgb(186 255 225)', borderRadius: '50px', width: '15%' }}>
      <Card.Img variant="top" src={strTeamBadge} style={{ maxWidth: '46%', alignItems: 'center', marginLeft: '50px', marginTop: '13px', boxShadow: '0px 0px 2px 4px' }} />
      <Card.Body className='text-center'>
        <Card.Title style={{ color: 'rgb(115 107 7)', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase' }}>{strTeam}</Card.Title>
        <Card.Text style={{ fontWeight: '500', color: 'rgb(32 13 107 / 65%)' }}>
          Spots type: {strSport}
        </Card.Text>

        <Link to={`/team/${idTeam}`}>
          {/* <p><small>ID: {idTeam}  <Link to={`/team/${idTeam}`}>click me</Link></small></p>  */}
          <Button variant="secondary" >Explore   <FontAwesomeIcon icon={faHandPointRight} style={{ paddingLeft: "1px", color: 'yellowGreen' }} /></Button>
        </Link>

      </Card.Body>
    </Card>

  );
};

export default Team;
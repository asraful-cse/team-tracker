
// import React from 'react';
import { Card , Button} from 'react-bootstrap';
import {    useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
const {strTeamBadge, strTeam, idTeam} = props.team
const history =useHistory();
const handleClick = (teamId) =>{
    const url = `/team/${teamId}`;
    history.push(url);
}

return (
    
 <Card style={{backgroundColor:'rgb(35 24 107)', borderRadius:'6px', width: '25%', marginLeft:'70px', marginTop:'30px' ,textAlign: 'center', marginBottom:'0', display:'inline-block' }}>
  <Card.Img variant="top" style={{maxWidth:'60%', marginTop:'15px'}} src={strTeamBadge} />
  <Card.Body>
    <Card.Title style={{color:'#6c8e6c', fontSize:'27px', fontWeight:'800'}}>{strTeam}</Card.Title>
    <Card.Text style={{color:'#A0A0A0'}}>
      <p>Spots type: Football</p>
    </Card.Text>
    {/* <p><small>ID: {idTeam}  <Link to={`/team/${idTeam}`}>click me</Link></small></p>  */}
    <Button variant="primary" onClick={()=>handleClick(idTeam)}>Explore   <FontAwesomeIcon icon={faHandPointRight} /></Button>
  </Card.Body>
</Card> 

    );
};

export default Team;
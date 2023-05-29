import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Profile = (props) => {
  const handleName =(Fullname) => alert(`the FULLNAME developper is ${props.Fullname}`)
  return (
   <center><div>
       <Card style={{ width: '18rem',borderStyle:'solide 10px ' }}>
        {props.children}
      <Card.Body>
        <Card.Title>{props.Fullname}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{props.bio}</Card.Link>
        <Card.Link href="#">{props.profession}</Card.Link>
        <Button variant="primary" onClick={handleName}>click here</Button>
      </Card.Body>
    </Card>
    </div></center> 
  )
}
Profile.prototype={
    fullname:PropTypes.string,
    bio:PropTypes.isrequired,
    profession:PropTypes.string,
}

export default Profile

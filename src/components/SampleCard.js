import React from 'react'
import {Card, Button} from 'react-bootstrap'

const SampleCard = (props) => {

  return(
    <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={props.sample.image_url} alt={props.sample.sample_name} />
    <Card.Body>
      <Card.Title style={{fontFamily: "Cinzel", fontWeight: "bold"}}>{props.sample.sample_name}</Card.Title>
      <Card.Text style={{fontFamily: "Cinzel"}}>
        Click for details and ordering
      </Card.Text>
      {/* <Button variant="primary" onClick={() => sampleClick(props.sample)}>Place Order</Button> */}
    </Card.Body>
  </Card>
  ) 
}

export default (SampleCard)
import React from 'react'
import { Card } from 'react-bootstrap'

const SampleCard = (props) => {


  return (
    <Card style={{ width: '30rem' }} onClick={() => props.handleClick(props.sample)}>
      <Card.Img variant="top" src={props.sample.image_url} alt={props.sample.sample_name} />
      {/* <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.sample.sample_name}</Card.Title>
        <Card.Text style={{ fontFamily: "Cinzel" }}>
        </Card.Text>
      </Card.Body> */}
    </Card>
  )
}

export default (SampleCard)
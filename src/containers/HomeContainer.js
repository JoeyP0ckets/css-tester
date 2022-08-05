import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink} from "react-router-dom"

const HomeContainer = () => {
  return (
    <Container className="home-container container-fluid">
      <Container className="about-container container-fluid">
        <div id="about-text">
          <h1 id="about-header">First Dose Fulfillment</h1>
          <div id="about-statement">
            Helping your patients breathe easier.
          </div>
        </div>
      </Container>

      <Row style={{ textAlign: "center", paddingTop: "10px" }}>
        <h1>Greetings, Doctor!</h1>
      </Row>

      <Container fluid className="doc-nav-container">
        <Row style={{ display: "flex", textAlign: "center" }}>
          <Col className="column-home" id="home-column-left"><h2>First Doses</h2>
            <div class="textBox">
            Shop from our selection of anti-bronchial medications. First Doses can be ordered and sent right to your office. 
            </div>
            <NavLink exact to="/FirstDoses">First Doses</NavLink>
          </Col>
          <Col className="column-home" id="home-column-right"><h2>Your Doses</h2>
            <div class="textBox">

            Keep track of your orders.  View information on your past orders as well as check the status of your current ones.

            </div>
            <NavLink exact to="/YourDoses">Your Doses</NavLink>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="contact-container">
        <div id="contact-text">
            
        </div>
      </Container>

    </Container >
  )
}

export default (HomeContainer)
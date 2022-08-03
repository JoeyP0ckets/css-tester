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
          <Col className="column" id="column-left"><h2>First Doses</h2>
            <div class="textBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <NavLink exact to="/FirstDoses">First Doses</NavLink>
          </Col>
          <Col className="column" id="column-right"><h2>Your Doses</h2>
            <div class="textBox">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>
            <NavLink exact to="/YourDoses">Your Doses</NavLink>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="contact-container">
        <div id="contact-text">
          <h1 id="contact-header">Contact Info</h1>
          <div id="contact-info">
            Wellness Pharma<br>
            </br>784 N. Tailwater Road<br>
            </br>Norwich, CT 06360
          </div>
        </div>
      </Container>

    </Container >
  )
}

export default (HomeContainer)
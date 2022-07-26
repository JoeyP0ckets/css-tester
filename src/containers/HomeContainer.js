import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

const HomeContainer = () => {
  return (
    <Container className="home-container">
      <Container className="about-container">
        <div id="about-text">
          <h1 id="about-header">About Statement</h1>
          <div id="about-statement">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!
          </div>
        </div>
      </Container>

      <Row style={{ textAlign: "center" }}>
        <h1>Greetings, Doctor!</h1>
      </Row>

      <Container className="doc-nav-container">
        <Row style={{ display: "flex" }}>
          <Col className="column" xs={2}><h2>First Doses</h2>
            <div class="textBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Col>
          <Col className="column" id="column-right" xs={2}><h2>Your Doses</h2>
            <div class="textBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="contact-container">
        <div id="contact-text">
          <h1 id="contact-header">Contact Info</h1>
          <div id="contact-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Container>

    </Container >
  )
}

export default (HomeContainer)
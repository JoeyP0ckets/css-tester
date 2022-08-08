import React from "react"
import {Row, Col} from "react-bootstrap"
import Login from "../components/Login"

const LoginSignup = () => {
  
  return (
    <Row id="login-row">
      <Col id="login-left-col" style={{height: "100vh"}}>
          <h1 id="login-page-header" className="header-fade-in" style={{fontFamily: "Cinzel", textAlign: "center"}}>First Dose Fulfillment™</h1>
          <div className="login-image fade-in-image">
            
          </div>
      </Col>
      <Col id="login-right-col" style={{height: "100vh"}}>
        <h3 style={{paddingTop: "200px", textAlign: "center", fontFamily: "Cinzel", fontWeight: ""}}>Login</h3>
        <Login/>
      </Col>
    </Row>
  )
} 

export default LoginSignup;
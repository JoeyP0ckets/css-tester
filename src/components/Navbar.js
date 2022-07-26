import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink, 
} from "react-router-dom";
import Home from "../components/Home"
import FirstDoses from "../components/FirstDoses"
import YourDoses from "../components/YourDoses"

const Navbar = () => {
  return (
    <div>
      <Router>
          <div className="navbar-container">
            <h1 className="navbar-logo">First Dose Fulfillment</h1>
              <div className="nav-links">
                <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                <NavLink exact to="/FirstDoses" className="main-nav" activeClassName="main-nav-active">First Doses</NavLink>
                <NavLink exact to="/YourDoses" className="main-nav" activeClassName="main-nav-active">Your Doses</NavLink>
                {/* {props.user && <LogoutButton/>} */}
              </div>
          </div>


          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/FirstDoses" element={<FirstDoses/>}/>
            <Route path="/YourDoses" element={<YourDoses/>}/>
              
          </Routes>
      </Router> 
    </div>
  )
}

export default (Navbar)
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
import LoginSignup from "../containers/LoginSignup"

const Navbar = () => {
  return (
    <div>
      <Router>
        <div className="navbar-container">
          <div className="navbar-logo"></div>
          <div className="navbar-bg"></div>
          <div className="nav-links">
            <NavLink exact to="/" className="main-nav">Home</NavLink>
            <NavLink exact to="/FirstDoses" className="main-nav">First Doses</NavLink>
            <NavLink exact to="/YourDoses" className="main-nav">Your Doses</NavLink>
            <NavLink exact to="/LogOut" className="main-nav">Log Out</NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstDoses" element={<FirstDoses />} />
          <Route path="/YourDoses" element={<YourDoses />} />
          <Route path="/LogOut" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default (Navbar)
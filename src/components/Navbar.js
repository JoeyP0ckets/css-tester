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
          <div className="navbar-logo"></div>
          <div className="navbar-bg"></div>
          <div className="nav-links">
            <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
            <NavLink exact to="/FirstDoses" className="main-nav" activeClassName="main-nav-active">First Doses</NavLink>
            <NavLink exact to="/YourDoses" className="main-nav" activeClassName="main-nav-active">Your Doses</NavLink>
            <NavLink exact to="/LogOut" className="main-nav" activeClassName="main-nav-active">Log Out</NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstDoses" element={<FirstDoses />} />
          <Route path="/YourDoses" element={<YourDoses />} />
          <Route path="/LogOut" element={<YourDoses />} />

        </Routes>
      </Router>
    </div>
  )
}

export default (Navbar)
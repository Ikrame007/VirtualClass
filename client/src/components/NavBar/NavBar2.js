import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <i className="fa fa-graduation-cap"></i>
           
            VirtualClass
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
            <li className="nav-item">
              <NavLink
                exact 
                to='templates'
                // onClick={toggle}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Templates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact 
                to='tutorials'
                // onClick={toggle}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Tutorials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/auth"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Login
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/auth"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
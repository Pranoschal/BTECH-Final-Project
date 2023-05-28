import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../components/images/logo1.jpg';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          <img src= {logo} alt="logo" width="80" height="45"  /> 
          <p className="navbar-heading">Grid ML</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Execute">
                Execute 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Receive">
                View
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Connect">
                Connect 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Disconnect">
               Disconnect
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

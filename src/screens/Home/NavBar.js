import React from "react";
import "./NavBar.css";
import metadata from "../../data/metadata.json";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { handleShow } = props;

  return (
    <div className="navbar">
      <i className="fab fa-spotify"></i>
      <div className="app-header">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          {metadata.appName}
        </Link>
      </div>
      <div className="app-text">TRADITIONAl MUSIC OF INDONESIA</div>
      <div className="app-login" onClick={() => handleShow()}>
        Login
      </div>
      <div className="app-trial">
        <Link style={{ textDecoration: "none", color: "white" }} to="/music">
          Trial
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

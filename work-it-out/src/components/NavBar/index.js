import React, {useContext} from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {positions} from '@mui/system';

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {UserContext} from "../UserContext";

export default function NavBar() {
  const {user} = useContext(UserContext);

  const linkStyle = {
    textDecoration: "none",
    color: '#333'
  };



  return (
    <nav className="navbar">
      <div>
        <Link to="/" style={linkStyle}>
          <h1 className="brand">Work <span className="dumbbell" >  I</span>t Out </h1>
        </Link>
        <div>Signed in As {user.name}</div>
      </div>
      <div className="menu">
        <Link to="/profile" style={linkStyle}>
          <PersonRoundedIcon sx={{fontSize: 50}} />
        </Link>
        <div>
          <span>
            <Link to="/login" style={linkStyle}>Login</Link>
          </span>
        </div>
        <div>
          <span>
            <Link to="/register" style={linkStyle}>Register</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

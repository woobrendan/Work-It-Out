import React, {useContext, useState} from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
import {positions} from '@mui/system';

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { UserContext } from "../../helpers/UserContext";

export default function NavBar() {
  const {user} = useContext(UserContext);
  const [showAuth, setShowAuth] = useState(false);


  const linkStyle = {
    textDecoration: "none",
    color: '#333'
  };



  return (

    <nav className="navbar ">
      <div className="container">
        <div>
          <Link to="/" style={linkStyle}>
            <h1 className="brand">Work <span className="dumbbell" >  I</span>t Out </h1>
          </Link>
          <div>Signed in As {user.name}</div>
        </div>
        <div className="menu">
          <div onClick={() => setShowAuth(!showAuth)} style={linkStyle}>
            <PersonRoundedIcon sx={{fontSize: 50}} />
          </div>
          {showAuth && <div className="menu-options">
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
            <div>
              <span>
                <Link to="/profile" style={linkStyle}>Profile</Link>
              </span>
            </div>
          </div>}
        </div>
      </div>
    </nav >
  );
}

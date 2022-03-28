import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ExerciseMenu from "./Exercise_menu";
import NavMenu from "./Nav_menu";

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { UserContext } from "../../helpers/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const [showAuth, setShowAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
  };

  return (
    <nav className="navbar ">
      <div className="container">
        <div>
          <Link to="/" style={linkStyle}>
            <h1 className="brand">
              Work <span className="dumbbell"> I</span>t Out{" "}
            </h1>
          </Link>
        </div>
        <div className="Nav-top-right-container">
          <ExerciseMenu />
          <NavMenu />
          <div className="menu">
            {user.name && (
              <div>
                Signed in as:<br></br> {user.name}
              </div>
            )}
            <div onClick={() => setShowAuth(!showAuth)} style={linkStyle}>
              <PersonRoundedIcon sx={{ fontSize: 50 }} />
            </div>
            {showAuth && (
              <div className="menu-options">
                {!user.name && (
                  <>
                    <div>
                      <span>
                        <Link to="/login" style={linkStyle}>
                          Login
                        </Link>
                      </span>
                    </div>
                    <div>
                      <span>
                        <Link to="/register" style={linkStyle}>
                          Register
                        </Link>
                      </span>
                    </div>
                  </>
                )}
                {user.name && (
                  <>
                    <div>
                      <span>
                        <Link to="/profile" style={linkStyle}>
                          Profile
                        </Link>
                      </span>
                    </div>
                    <div>
                      <span>
                        <div
                          onClick={() => localStorage.clear()}
                          style={linkStyle}
                        >
                          Logout
                        </div>
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

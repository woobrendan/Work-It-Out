import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { UserContext } from "../UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <h1 className="brand"> Work It Out </h1>
        </Link>
        <div>Signed in As {user.id}</div>
      </div>
      <div>
        <Link to="/profile">
          <PersonRoundedIcon />
        </Link>
        <div>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>
        <div>
          <span>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

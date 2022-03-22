import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <PersonRoundedIcon />
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>

      <div>
        <Link to="/">
          <span> Work It Out </span>
        </Link>
      </div>
      <div></div>
    </nav>
  );
}

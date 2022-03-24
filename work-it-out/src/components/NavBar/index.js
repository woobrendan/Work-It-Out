import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function NavBar() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
  });

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <h1 className="brand"> Work It Out </h1>
        </Link>
        <div>
          Name: <p>{user.name}</p>
        </div>
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

import React from "react";
import "./NavBar.css";

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <PersonRoundedIcon />
      </div>
      <div>
        <span> Work It Out </span>
      </div>
      <div></div>
    </nav>
  );
}

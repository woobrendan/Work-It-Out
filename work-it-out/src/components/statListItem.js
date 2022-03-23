import React from "react";
// import "./NavBar.css";
import "./styles/statList.css";
import {Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table';


// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function StatListItem(props) {
  const {name, thumbnail} = props.exercise
  return (
   <li className="statListItem">
    <h3 className="exerciseName">{name}</h3>
      <img src={thumbnail}/>
   </li>
  );
}

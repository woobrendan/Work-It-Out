import React from "react";
// import "./NavBar.css";
import {Link } from 'react-router-dom'
import StatListItem from './statListItem'

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function WorkoutStats(props) {
  const exerciseList = props.exerciseList.map(exercise => {
    <StatListItem />
  })
  return (
   <div>
     <div className="exerciseName"></div>
   </div>
  );
}

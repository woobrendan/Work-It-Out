import React from "react";
// import "./NavBar.css";
import "./styles/statList.css";
import {Link } from 'react-router-dom'

// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function StatListItem(props) {
  const {name, weight, reps, sets} = props.exercise
  return (
   <li class="statListItem">
     <div className="exerciseName">{name}</div>
     <table>
       <tr>
         <th>Weight</th>
         <th>Reps</th>
         <th>Sets</th>
         <th>Add</th>
       </tr>
       <tr>
         <td>{weight}</td>
         <td>{reps}</td>
         <td>{sets}</td>
         <td><button>+</button></td>
       </tr>
     </table>
   </li>
  );
}

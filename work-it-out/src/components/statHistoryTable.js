import React from "react";
// import "./NavBar.css";
import {Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table';
import { groupWorkouts } from '../helpers/helperFunc' 


// Importing material UI icons
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

// needs props.workoutlist which contains array of exercises. grab from api/workouts/users/:id
export default function StatHistoryTable(props) {
  const groupedWorkouts = groupWorkouts(props.workoutlist);
 
  const tableWorkouts = groupedWorkouts.map((workout, index) => (
    <Table responsive striped bordered size="md" key={index}>
      <thead className="thead-dark">
        <tr>
          <th colSpan={workout.length + 1}>Workout #{index + 1}</th>
        </tr>
        <tr>
        <th></th>
        {Array.from({length: workout.length}).map((_, index) => (
          <th key={index}>{workout[index].name}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Weight(lbs)</td>
          {Array.from({length: workout.length}).map((_, index) => (
            <td key={index}>{workout[index].weight}</td>
          ))}
      </tr>
      <tr>
        <td>Reps</td>
          {Array.from({length: workout.length}).map((_, index) => (
            <td key={index}>{workout[index].user_reps}</td>
          ))}
      </tr>
      <tr>
        <td>Sets</td>
          {Array.from({length: workout.length}).map((_, index) => (
            <td key={index}>{workout[index].user_sets}</td>
          ))}
      </tr>
       </tbody>
     </Table>
  ))

  return (
    <>
      <h1 className="statList--header">{props?.workoutlist?.[0]?.user_name || "Unamed"} </h1>
      {tableWorkouts}
    </>
  );
}

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
  console.log(groupedWorkouts)
  const tableWorkouts = groupedWorkouts.map((workout, index) => (
    <Table responsive striped bordered size="md">
      <thead className="thead-dark">
        <tr>
          <th colspan={workout.length + 1}>Workout #{index + 1}</th>
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
    <div>
      <div className="statList--header">
        <h1>{props.workoutlist[0].user_name} </h1>
      </div>
      {tableWorkouts}
    </div>
  );
}

import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Form, FormGroup} from 'react-bootstrap';
import './styles/card.css'
import axios from "axios";
import ExerciseForm from './ExerciseForm';
import MenuItem from '@mui/material/MenuItem';
import StatTable from "./statTable";
import Button from '@mui/material/Button';



export default function WorkoutsNew() {

  const [workout, setWorkout] = useState([]);
  const [mode, setMode] = useState([]);

  const handleFinalSubmit = () => {
    console.log("I submit")
    // axios
    //   .post('/api/workouts/new', {data: workout})
    //   .then(res => {
    //     console.log("res:", res)
    //   })
    //   .catch(err => console.log(err))
  };

  const handleExerciseForm = (values) => {
    const workoutCopy = [...workout]
    workoutCopy.push(values)
    setWorkout(workoutCopy) 
  }


  return (
    <>
    <h1>Create New Workout</h1>
      <ExerciseForm onClick={handleExerciseForm} />
      <pre>
        {JSON.stringify(workout, null, 2)}
      </pre>
      <StatTable list={workout}/>
      <div className="centerButton">
        <Button 
          onClick={handleFinalSubmit}
          variant="contained" 
          color="success"
        >
          Submit Workout
        </Button>
      </div>
    </>
  );
}
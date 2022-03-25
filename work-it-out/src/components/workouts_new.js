import React, {useState} from "react";
import {useNavigate } from 'react-router-dom'
import './styles/card.css'
import axios from "axios";
import ExerciseForm from './ExerciseForm'
import StatTable from "./statTable";
import Button from '@mui/material/Button';



export default function WorkoutsNew() {
  const [workout, setWorkout] = useState([]);
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    axios
      .post('http://localhost:8080/workouts/new', {workouts: workout})
      .then(res => {
        navigate('/profile')
      })
      .catch(err => console.log(err))
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

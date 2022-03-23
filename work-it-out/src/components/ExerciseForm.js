import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';


export default function ExerciseForm(props) {
  const [exercises, setExercises] = useState([]);
  const [exerciseStat, setExerciseStat] = useState({
    exercise: "",
    weight: "",
    reps: "",
    sets: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/exercises`)
    .then((res) => {
      setExercises(res.data)
    })
    .catch(err => console.log("Error:", err))
    },[]
  );

  const handleChange = (event) => {
    setExerciseStat((prev) =>({
      ...prev,
      [event.target.name]: event.target.value
    }))
  };

  const mappedExercises = exercises.map((move) => (
    <MenuItem key={move.id} value={move.id}>{move.name}</MenuItem>
  ));

  return ( 
    <>
      <pre>{JSON.stringify(exerciseStat, null, 2)}</pre>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel for="exampleFormControlSelect2">Exercise</InputLabel>
          <Select 
            className="form-control" 
            name="exercise"
            value={exerciseStat.exercise} 
            onChange={handleChange}
          >
          {mappedExercises}
          </Select>
          <br></br>
        <div className="form-outline">
        <TextField
          id="outlined-number"
          label="Weight"
          name="weight"
          type="number"
          value={exerciseStat.weight}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          />
          <TextField
          id="outlined-number"
          label="Reps"
          name="reps"
          type="number"
          value={exerciseStat.reps}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          />
           <TextField
          id="outlined-number"
          label="Sets"
          name="sets"
          type="number"
          value={exerciseStat.sets}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
      </FormControl>
    </Box>
    <br></br>
    <Button 
      variant="contained" 
      color="success"
      onClick={() => props.onClick(exerciseStat)}
    >
    Add Exercise
    </Button>
  </>
  )
}
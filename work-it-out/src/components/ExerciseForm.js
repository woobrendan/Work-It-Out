import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './styles/card.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ExerciseForm(props) {
  const [exercises, setExercises] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [exerciseStat, setExerciseStat] = useState({
    name: '',
    exercise_id: "",
    weight: "",
    user_reps: "",
    user_sets: ""
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
      [event.target.name]: event.target.value,
    }))
  };

  //return the exercise id of a given exercise
  const findExerciseId = (name) => {
    const foundExercise = exercises.find(exercise => name === exercise.name)
    return foundExercise.id
  }

  const handleExerciseChange = (event) => {
    setExerciseStat((prev) =>({
      ...prev,
      name: event.target.value,
      exercise_id: findExerciseId(event.target.value),
    }))
  };

  //render options for user to choose exercises for workouts
  const mappedExercises = exercises.map((move) => (
    <MenuItem key={move.id} value={move.name}>{move.name}</MenuItem>
  ));

  

  return ( 
    <div className="modalForm">
      <pre>{JSON.stringify(exerciseStat, null, 2)}</pre>
      <Button 
        onClick={handleOpen}
        variant="contained" 
        color="success"
      >
        Add New Exercise
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exercise
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel for="exampleFormControlSelect2">Exercise</InputLabel>
              <Select 
                className="form-control" 
                name="name"
                value={exerciseStat.exercise} 
                onChange={handleExerciseChange}
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
                name="user_reps"
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
                name="user_sets"
                type="number"
                value={exerciseStat.sets}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </div>
          </FormControl>
          <div className="centerButton">
          <br></br>
            <Button 
              variant="contained" 
              color="success"
              onClick={() => props.onClick(exerciseStat)}
            >
            Add Exercise
            </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    
  </div>
  )
}
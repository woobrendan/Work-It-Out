import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./styles/card.css";
import { UserContext } from "../helpers/UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ExerciseForm(props) {
  const [exercises, setExercises] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isError, setIsError] = useState(false);
  const { user } = useContext(UserContext);

  const [exerciseStat, setExerciseStat] = useState({
<<<<<<< HEAD
    name: '',
=======
    name: "",
>>>>>>> 0811dda (change to dynamically grab user id)
    user_id: user.id,
    exercise_id: "",
    weight: "",
    user_reps: "",
    user_sets: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/exercises`)
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);
  //handle modal status
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //handles changes to weight, reps, sets, adjusts state
  const handleChange = (event) => {
    setExerciseStat((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //return the exercise id of a given exercise
  const findExerciseId = (name) => {
    const foundExercise = exercises.find((exercise) => name === exercise.name);
    return foundExercise.id;
  };

  //handle selection of exercise, sets name of exercise and the id value
  const handleExerciseChange = (event) => {
    setExerciseStat((prev) => ({
      ...prev,
      name: event.target.value,
      exercise_id: findExerciseId(event.target.value),
    }));
  };

  //render options for user to choose exercises for workouts
  const mappedExercises = exercises.map((move) => (
    <MenuItem key={move.id} value={move.name}>
      {move.name}
    </MenuItem>
  ));

  //When user clicks add exercise to workout. verify fields are filled, or show error
  const addExerciseClick = () => {
    const statValues = Object.values(exerciseStat);
    if (statValues.includes("")) {
      setIsError(true);
    } else {
      //fields are filled. set error to false, send info to parent, reset field/state
      setIsError((prev) => {
        if (prev) return false;
      });
      props.onClick(exerciseStat);
      setExerciseStat({
        name: "",
        user_id: user.id,
        exercise_id: "",
        weight: "",
        user_reps: "",
        user_sets: "",
      });
      handleClose();
    }
  };

  return (
    <div className="modalForm">
      <Card sx={{ minwidth: 275 }}>
        <CardContent className="cardContent">
          <CardMedia
            component="img"
            height="194"
            image="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Get Started!"
          />
          <br></br>
          <Typography variant="h5" component="div">
            Start Adding Exercises to your Workout!
          </Typography>
          <br></br>
          <CardActions className="centerButton">
            <Button onClick={handleOpen} variant="contained" color="warning">
              Add New Exercise
            </Button>
          </CardActions>
        </CardContent>
      </Card>

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
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="exampleFormControlSelect2">
                Exercise
              </InputLabel>
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
                  error={exerciseStat.weight === ""}
                  helperText={exerciseStat.weight === "" ? "Add Weight!" : " "}
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
                  error={exerciseStat.user_reps === ""}
                  helperText={exerciseStat.user_reps === "" ? "Add Reps!" : " "}
                  value={exerciseStat.user_reps}
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
                  error={exerciseStat.user_sets === ""}
                  helperText={exerciseStat.user_sets === "" ? "Add Sets!" : " "}
                  value={exerciseStat.user_sets}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </FormControl>
            <div className="centerButton">
              <br></br>
              {isError && (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  All fields must be filled.
                </Typography>
              )}
              <Button
                variant="contained"
                color="success"
                onClick={() => addExerciseClick()}
              >
                Add Exercise
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

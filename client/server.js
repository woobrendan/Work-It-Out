// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 8080;
// const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const router = express.Router();
const app = express();
const morgan = require("morgan");
// serve static files (img, css, js) from directoty 'public'
app.use(express.static("public"));

//database import
const pool = require("./lib/db.js");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Users
const apiUsers = require('./routes/api_users');
app.use('/api/users', apiUsers(pool));

// Exercises
const apiExercises = require('./routes/api_exercises');
app.use('/api/exercises', apiExercises(pool));

// Muscle Groups
const apiMuscleGroups = require('./routes/api_muscle_groups');
app.use('/api/muscleGroups', apiMuscleGroups(pool));

// Workouts
const apiWorkouts = require('./routes/api_workouts');
app.use('/api/workouts', apiWorkouts(pool));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
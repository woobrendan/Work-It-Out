// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 8080;
// const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const router = express.Router();
const app = express();
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const authenticateToken = require('./helper/authToken')
// serve static files (img, css, js) from directoty 'public'
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
// app.use(authenticateToken)

//database import
const pool = require("./lib/db.js");

const userRoute = require('./routes/users');
const apiUsers = require('./routes/api/api_users');
const apiExercises = require('./routes/api/api_exercises');
const apiMuscleGroups = require('./routes/api/api_muscle_groups');
const apiWorkouts = require('./routes/api/api_workouts');

app.use('/users', userRoute(pool, jwt));

/////  API ROUTES /////
app.use('/api/users', apiUsers(pool));
app.use('/api/exercises', apiExercises(pool));
app.use('/api/muscleGroups', apiMuscleGroups(pool));
app.use('/api/workouts', apiWorkouts(pool));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
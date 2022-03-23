// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 8080;
// const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const router = express.Router();
const app = express();
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./helper/authToken");
const bodyParser = require("body-parser");

// serve static files (img, css, js) from directoty 'public'
app.use(express.static("public"));
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(authenticateToken)

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:3002/", "http://localhost:8080/"];
  const origin = req.headers.origin;
  console.log("ORIGIN", origin);
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

//database import
const pool = require("./lib/db.js");

const userRoute = require("./routes/users");
const apiUsers = require("./routes/api/api_users");
const apiExercises = require("./routes/api/api_exercises");
const apiMuscleGroups = require("./routes/api/api_muscle_groups");
const apiWorkouts = require("./routes/api/api_workouts");
const apiStats = require("./routes/api/api_workout_stats");
const req = require("express/lib/request");

app.use("/users", userRoute(pool, jwt));
/////  API ROUTES /////
app.use("/api/users", apiUsers(pool));
app.use("/api/exercises", apiExercises(pool));
app.use("/api/muscleGroups", apiMuscleGroups(pool));
app.use("/api/workouts", apiWorkouts(pool));
app.use("/api/workoutStats", apiStats(pool));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

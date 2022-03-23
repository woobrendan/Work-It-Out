const { query } = require('express');
const express = require('express');
const router  = express.Router();

module.exports = function(db) {
  
  // api/workoutStats/users/:id shows information for particular user
  router.get('/users/:id', (req, res) => {
    const queryString = `
    SELECT users.name AS User_name, workout_stats.weight AS weight, workout_stats.reps AS user_reps, workout_stats.sets AS user_sets, exercises.* FROM workout_stats 
    JOIN users ON user_id = users.id
    JOIN exercises ON exercise_id = exercises.id
    WHERE users.id = $1;`
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

  // api/workoutStats/workout/:id shows information for particular workout
  router.get('/workouts/:id', (req, res) => {
    const queryString = `
    SELECT users.name AS User_name, workouts.id AS workout_num, workout_stats.weight AS weight, workout_stats.reps AS user_reps, workout_stats.sets AS user_sets, exercises.* FROM workout_stats 
    JOIN users ON user_id = users.id
    JOIN exercises ON exercise_id = exercises.id
    JOIN workouts ON workouts.id = workout_id
    WHERE workouts.id = $1;`
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });


  //api/workout_stats/new   NOTE TO SELF: refactor so its new stat line to existing workout
  router.post('/:id', (req, res) => {
    const stats = req.body;
    const queryString = `
      INSERT INTO workout_stats(weight, reps, sets, user_id, exercise_id, workout_id)
      VALUES ($1, $2, $3, $4, $5, $6);
    `
    return db
    //need to use state to pass through user and workout id
      .query(queryString, [stats.weight, stats.reps, stats.sets, state.user_id, stats.exercise_id, state.workout_id])
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });
  return router;
}
const express = require('express');
const router  = express.Router();

module.exports = function(db) {
  // route = /api/workouts
  router.get('/', (req, res) => {
    const queryString = `
    SELECT * FROM workouts 
    JOIN workouts_exercises ON workout_id = workouts.id
    JOIN exercises ON workouts_exercises.exercise_id = exercises.id;`
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

  // api/workouts/:id
  router.get('/:id', (req, res) => {
    const queryString = `
    SELECT * FROM workouts 
    JOIN workouts_exercises ON workout_id = workouts.id
    JOIN exercises ON workouts_exercises.exercise_id = exercises.id
    WHERE workouts.id = $1;`
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

  // api/workouts/users/:id
  router.get('/users/:id', (req, res) => {
    const queryString = `
    SELECT users.name AS User_name, workouts.id AS workout_num, workout_stats.weight AS weight, workout_stats.reps AS user_reps, workout_stats.sets AS user_sets, exercises.* FROM workout_stats 
    JOIN users ON user_id = users.id
    JOIN exercises ON exercise_id = exercises.id
    JOIN workouts ON workouts.id = workout_id
    WHERE users.id = $1;`
    return db
      .query(queryString, [req.params.id])
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

  return router;
}
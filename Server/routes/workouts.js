const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // workouts/new
  router.post('/new', (req, res) => {
    const userId = req.body.workouts[0].user_id;
    const exerciseArrayFromWorkouts = req.body.workouts
    const queryString = `INSERT INTO workouts(user_id)
    VALUES($1) RETURNING *;`;

    //function that builds insert workout_stats string dynamically for n number of exercises in a workout
    const queryString2 = queryStringBuilder(exerciseArrayFromWorkouts);
    return db
    .query(queryString, [userId])
    //created new workout, returns result, get the workout id below then pass to next .then
    .then(result => {
      return result.rows[0].id
    })
    .then(workoutId => {
      //creates array of values for the query string
      const exerciseQueryValues = exerciseValues(exerciseArrayFromWorkouts, workoutId);
      return db.query(queryString2, exerciseQueryValues)
    })
    .then(response => {
      res.json(response.rows);
      return res.status(200)
    })
    .catch(err => {
      console.log("Error:", err.message)
      res.json({error: err.message})
    });

  });
  return router;
}

const queryStringBuilder = (exerciseArray) => {
  let string = "INSERT INTO workout_stats(weight, reps, sets, user_id, exercise_id, workout_id) VALUES ("
  const numOfExercisesInputs = exerciseArray.length * 6;
  for (let i = 1; i <= numOfExercisesInputs; i++) {
    if (i === numOfExercisesInputs) {
      string += `$${i}) RETURNING *;`
    } else if (i % 6 === 0){
      string += `$${i}), (`
    } else {
      string += `$${i}, `;
    }
  } 
  return string;
};

const exerciseValues = (arrOfExercises, workoutId) => {
  const valsArray = [];
  arrOfExercises.forEach(exercise => {
    const {weight, user_reps, user_sets, user_id, exercise_id} = exercise;
    valsArray.push(weight, user_reps, user_sets, user_id, exercise_id, workoutId);
  })
  return valsArray;
}

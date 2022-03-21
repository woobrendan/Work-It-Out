const express = require('express');
const router  = express.Router();

module.exports = function(db) {
  // route = /api/users
  router.get('/', (req, res) => {
    const queryString = `
    SELECT * FROM users;`
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

 // route = /api/users/:id/workouts, Return all the workouts for specific user
 router.get('/:id/workouts', (req, res) => {
  const queryString = `
  SELECT users.name AS Username, exercises.* FROM workouts
  JOIN exercises ON exercise_id = exercises.id
  JOIN users ON users.id = user_id
  WHERE users.id = $1;
  `
  return db
    .query(queryString, [req.params.id])
    .then(response => {
      return res.status(200)
      .json(response.rows);
    })
    .catch(err => console.log(err.message));
});

// api/users/new
router.post('/new', (req, res) => {
  const user = req.body
  const queryString = `INSERT INTO users(name, email, password, birthdate) VALUES($1, $2, $3, $4) RETURNING *;`;
  const values = [user.name, user.email, user.password, user.birthdate];
  return db
    .query(queryString, values)
    .then(result => {
      if (!result) {
        res.send({error: "error"});
        return;
      }
      // set token in local storage to new user
        // TBD
      res.redirect('/');
    })
  });

  return router;
}
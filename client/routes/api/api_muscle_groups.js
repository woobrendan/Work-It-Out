const express = require('express');
const router  = express.Router();

module.exports = function(db) {
  // route = /api/muscleGroups
  router.get('/', (req, res) => {
    const queryString = `
    SELECT * FROM muscle_groups;`
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
        .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });

  // route = /api/muscleGroups/:id. Returns all exercises related to specific muscle group
  router.get('/:id', (req, res) => {
    const queryString = `
    SELECT exercises.id AS id, exercises.name AS name, description, exercises.thumbnail AS thumbnail, video, muscle_group_id 
    FROM exercises
    JOIN muscle_groups ON muscle_groups.id = muscle_group_id
    WHERE muscle_groups.id = $1;`
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
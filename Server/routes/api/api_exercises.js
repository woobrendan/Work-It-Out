const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // route = /api/exercises
  router.get('/', (req, res) => {
    const queryString = `
    SELECT * FROM exercises;`
    return db
      .query(queryString)
      .then(response => {
        return res.status(200)
          .json(response.rows);
      })
      .catch(err => console.log(err.message));
  });
  return router;
}
const express = require('express');
const router = express.Router();

module.exports = function(db) {
 
  // route = /api/debug/reset
  router.get('/reset', (req, res) => {
    console.log("hit the reset route")
    const queryString = `\i db/schema/01_users.sql`
    return db
      .query(queryString)
      .then(response => {
        db.query(`\i db/seeds/01_users.sql`)
      })
      .then(response => {
        console.log("Database Reset")
        return res.status(200)
          .send("Database Reset");
      })
      .catch(err => console.log(err.message));
  });

  return router;
}
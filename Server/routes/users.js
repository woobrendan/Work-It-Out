const express = require("express");
const router = express.Router();
require("dotenv").config();

module.exports = (db, token) => {
  // users/login
  router.post("/login", (req, res) => {
    const email = req.body.data.email;
    const password = req.body.data.password;

    db.query(`SELECT * FROM users WHERE email = $1;`, [email]).then(
      (result) => {
        if (password === result.rows[0].password) {
          const user = { ...result.rows[0] };
          delete user.password;
          //create JWT token, serialize user obj
          const accessToken = token.sign(user, process.env.ACCESS_TOKEN_SECRET);
          console.log(accessToken);
          // create access token with the user info inside of the token
          res.json({ accessToken, user });
        } else {
          res.send({ error: "error" });
          return;
        }
      }
    );
  });

  // /users/new,   creating new users
  router.post("/new", (req, res) => {
    const newUser = req.body.data;
    const queryString = `INSERT INTO users(name, email, password, birthdate) VALUES($1, $2, $3, $4) RETURNING *;`;
    const values = [newUser.name, newUser.email, newUser.password, newUser.birthdate];
    return db
      .query(queryString, values)
      .then((result) => {

        if (!result) {
          res.send({ error: "error" });
          return;
        }
        const user = {...newUser, id: result.rows[0].id}
        //create JWT token, serialize user obj
        const accessToken = token.sign(user, process.env.ACCESS_TOKEN_SECRET);

        // create access token with the user info inside of the token
        res.json({ accessToken, user });
      })
      .catch((error) => {
        console.log(error);
        console.log("POST /users/new", error);
      });
  });

  return router;
};

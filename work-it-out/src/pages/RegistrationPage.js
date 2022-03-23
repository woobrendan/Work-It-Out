import React, { useState } from "react";

const axios = require("axios");
// Make an axis post req to that URL

// In the rq body, body will contain obj called user {email, pw, birthday and name}

export default function RegistrationPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const headers = {
      // "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin"': "*",
    };
    console.log("USER", user);
    axios
      .post("/users/new", { user })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log("USER", user);
    // fetch(" /users/new", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Access-Control-Allow-Origin"': '*',
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={user.name}
        ></input>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        ></input>
        <input
          name="birthdate"
          type="text"
          placeholder="Birthdate"
          onChange={handleChange}
          value={user.birthdate}
        ></input>
        <button type="button" onClick={handleSubmit}>
          Sign up!
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";

const axios = require("axios");

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
    axios
      .post("/users/new", { data: user })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

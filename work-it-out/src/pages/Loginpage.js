import React, { useState } from "react";
const axios = require("axios");

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("/users/login", { data: user })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
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
      <button type="button" onClick={handleSubmit}>
        Log in
      </button>
    </div>
  );
}

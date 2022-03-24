import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const axios = require("axios");

export default function RegistrationPage() {
  const navigate = useNavigate();

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
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          onChange={handleChange}
          value={user.name}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="text"
          onChange={handleChange}
          value={user.email}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
          value={user.password}
        />
        <TextField
          id="outlined-basic"
          label="Birthdate"
          variant="outlined"
          name="birthdate"
          type="text"
          onChange={handleChange}
          value={user.birthdate}
        />
        <Button onClick={handleSubmit}>Sign up!</Button>
      </Box>
    </div>
  );
}

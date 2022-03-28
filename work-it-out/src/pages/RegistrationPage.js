import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../helpers/UserContext";
import workoutVideo from "../components/video/workout-short.mp4";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import "../components/styles/card.css";

const axios = require("axios");

export default function RegistrationPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

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
      .post("http://localhost:8080/users/new", { data: user })
      .then(function (response) {
        userContext.setUser(response.data.user);
        navigate("/");
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="LoginCard">
      <video autoPlay loop muted id="video">
        <source src={workoutVideo} type="video/mp4" />
      </video>
      <Card sx={{ minwidth: 150 }} className="login-card">
        <CardContent>
          <Typography variant="h2" component="div" className="card-title">
              Registration
          </Typography>
          <br></br>
          <Box
            className="registration-box"
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
              id="outlined-basic2"
              label="Email"
              variant="outlined"
              name="email"
              type="text"
              onChange={handleChange}
              value={user.email}
            />
            <TextField
              id="outlined-basic3"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
              value={user.password}
            />
            <TextField
              id="outlined-basic4"
              label="Birthdate"
              variant="outlined"
              name="birthdate"
              type="text"
              onChange={handleChange}
              value={user.birthdate}
            />
          </Box>
          <br></br>
          <div className="centerButton">
            <Button variant="contained" color="warning" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

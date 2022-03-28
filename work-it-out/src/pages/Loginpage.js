import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../helpers/UserContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../components/styles/login.css";
import workoutVideo from "../components/video/workout-short.mp4";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import "../components/styles/card.css";

const axios = require("axios");

export default function LoginPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

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

  const handleClick = () => {
    navigate('/register');
  }

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/users/login", { data: user })
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
      <Card sx={{ minwidth: 150 }}>
        <CardContent>
        <Typography variant="h2" component="div" className="card-title">
          Login
        </Typography>
        <br></br>
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
              label="Email"
              variant="outlined"
              name="email"
              type="text"
              onChange={handleChange}
              value={user.email}
            />
            <TextField
              id="outlined-basic2"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
              value={user.password}
            />
          </Box>
          <br></br>
          <div className="centerButton">
            <Button variant="contained" color="warning" onClick={handleSubmit}>
              Log in
            </Button>
          </div>
          <br></br>
          <Typography variant="body1" onClick={handleClick}>
            Not registered? Sign up here!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

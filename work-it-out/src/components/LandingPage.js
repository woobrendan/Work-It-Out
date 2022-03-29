import React from "react";
import "../components/NavBar/NavBar.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {makeStyles} from "@mui/styles";
import {useNavigate} from 'react-router-dom'
import '../components/styles/card.css'




// import { UserContext } from "../../helpers/UserContext";

const useStyles = makeStyles({
  paper: {
    display: "grid",
    gridTemplateColumns: "3rem 250px 250px 3rem",
    gridTemplateRows: "3rem 250px 250px 3rem",
    gridGap: "1rem",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    gridRow: "1 / 2",
    gridColumn: "1 / 5"
  },
  bottom: {
    gridRow: "4 / 5",
    gridColumn: "1 / 5"
  },
  left: {
    gridRow: "2 / 4",
    gridColumn: "1 / 2"
  },
  right: {
    gridRow: "2 / 4",
    gridColumn: "4 / 5"
  },
  card: {
    width: "90%",
    height: "100%"
  }
});




export default function LandingPage() {

  const classes = useStyles();
  const navigate = useNavigate();
  const Quadrantbuilder = () => {

    const handleClick = (path) => {
      navigate(path)

    }
    const titles = [
      {
        name: "Muscle Groups",
        link: '/muscleGroups',
      },
      {
        name: "Workout History",
        link: '/Profile',
      },
      {
        name: "Create New Workout",
        link: '/workouts/new'
      },
      {
        name: "Login",
        link: '/login',
      },
    ]
    const classes = useStyles();

    const squares = titles.map((title, index) => (
      <Card className={classes.card} key={index + 1} onClick={() => handleClick(title.link)} >
        <CardContent>
          <h1>{title.name}</h1>
        </CardContent>
      </Card>
    )
    )
    return squares;
  }

  return (
    <>
      <Paper className={classes.paper} id="LandingCard">
        <Typography className={classes.top}></Typography>
        <Typography className={classes.bottom}></Typography>
        <Typography className={classes.left}></Typography>
        <Typography className={classes.right}></Typography>
        {Quadrantbuilder()}
      </Paper>
    </>
  );
}

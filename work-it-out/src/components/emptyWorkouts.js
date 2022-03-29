import React from "react";
import {Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './styles/card.css'


export default function EmptyWorkouts() {
  return (
    <div className="EmptyWorkouts">
      <Card sx={{minwidth: 275}}>
        <CardContent className="cardContent">
          <CardMedia
            component="img"
            height="194"
            image="https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg"
            alt="Get Started!"
          />
          <br></br>
          <Typography variant="h5" component="div">
            No Workouts to Show!
          </Typography>
          <br></br>
          <Typography variant="body1">
            To Start Adding New Workouts Click the Button Below!
          </Typography>
          <CardActions className="centerButton">
            <Button 
            className="workoutAddButton"
            component={Link} 
            to={'/workouts/new'} 
            variant="contained"
            color="warning" 
            >
            Add New Workout
            </Button>
          </CardActions>
        </CardContent>
      </Card> 
    </div>
  );
}

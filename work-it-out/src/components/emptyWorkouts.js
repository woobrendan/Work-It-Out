import React from "react";
import {Link } from 'react-router-dom'
import Box from '@mui/material/Box';
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
            image="https://images.firstpost.com/wp-content/uploads/2020/07/gym-shutterstock-640.jpg"
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

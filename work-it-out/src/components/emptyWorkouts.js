import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap';
import './styles/card.css'


export default function EmptyWorkouts() {
  return (
    <div className="EmptyWorkouts">
      <Card className="card border-danger mb-3 w-120 text-center">
        <Card.Body className="card-body text-danger">
          <Card.Title>
            No Workouts to Show!
          </Card.Title>
          <Card.Text>
            To Start Adding New Workouts Click the Button Below!
          </Card.Text>
          <Button className="btn btn-danger">Add New Workout</Button>
        </Card.Body>
      </Card> 
    </div>
  );
}

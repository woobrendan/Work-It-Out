import React, { useState } from "react";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";
import EmptyWorkouts from "../components/emptyWorkouts";
import "../components/styles/statList.css";
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'
import '../components/styles/card.css'

const WORKOUTS = "WORKOUTS";
const EMPTY = "EMPTY";

export default function ProfilePage() {
  const { state } = useApplicationData();
  const [mode, setMode] = useState(
    WORKOUTS
    // state.statHistory.length === 0 ? EMPTY : WORKOUTS
  );
  // console.log('I am mode:', mode);
  // console.log('stat history:', state.statHistory)
  // const mode = state.statHistory.length === 0 ? EMPTY : WORKOUTS;
  return (
    <>
      <h1 className="statList--header">
        {state.statHistory[0]?.user_name || "Get My Username Later"}{" "}
      </h1>
      {mode === WORKOUTS && (

        <>
         <div className="centerButton">
          <Button
            className="workoutAddButton" 
            component={Link} 
            to={'/workouts/new'} 
            variant="contained"
            color="warning" 
            >
            Add New Workout
          </Button>
          </div>
          <br></br>
          <StatHistoryTable workoutlist={state.statHistory} />
        </>
      )}
      {mode === EMPTY && <EmptyWorkouts />}
    </>
  );
}

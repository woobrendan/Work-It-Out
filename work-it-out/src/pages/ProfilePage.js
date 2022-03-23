import React, { useState } from "react";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";
import EmptyWorkouts from "../components/emptyWorkouts";
import "../components/styles/statList.css";

const WORKOUTS = "WORKOUTS";
const EMPTY = "EMPTY";

export default function ProfilePage() {
  const { state } = useApplicationData();
  // const [mode, setMode] = useState(
  //   state.statHistory.length === 0 ? EMPTY : WORKOUTS
  // );
  const mode = state.statHistory.length === 0 ? EMPTY : WORKOUTS;
  return (
    <>
      <h1 className="statList--header">
        {state.statHistory[0]?.user_name || "Get My Username Later"}{" "}
      </h1>
      {mode === WORKOUTS && (
        <StatHistoryTable workoutlist={state.statHistory} />
      )}
      {mode === EMPTY && <EmptyWorkouts />}
    </>
  );
}

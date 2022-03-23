import React from "react";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";
import "../components/styles/statList.css";

export default function ProfilePage() {
  const { state } = useApplicationData();
  return (
    <StatHistoryTable workoutlist={state.statHistory} />
  );
}

import React from "react";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";

export default function ProfilePage() {
  const { state } = useApplicationData();
  return (
    <StatHistoryTable workoutlist={state.statHistory} />
  );
}

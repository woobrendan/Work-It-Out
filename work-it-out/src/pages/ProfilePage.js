import React from "react";
import useApplicationData from "../helpers/test_state_helper";
import StatHistoryTable from "../components/statHistoryTable";
import "../components/styles/statList.css";

export default function ProfilePage() {
  const { state } = useApplicationData();
  return (
    <>
      <h1 className="statList--header">{state.statHistory[0]?.user_name || "Unamed"} </h1>
      <StatHistoryTable workoutlist={state.statHistory} />
    </>
  );
}

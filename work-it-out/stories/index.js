import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import WorkoutStats from "../src/components/workout_stats"
import StatListItem from "../src/components/statListItem";
import StatTable from "../src/components/statTable";
import StatHistoryTable from "../src/components/statHistoryTable";
import {workouts, workoutsLong, userWorkouts} from './testData'
import EmptyWorkouts from '../src/components/emptyWorkouts';


storiesOf("WorkoutStats", module)
  .add("Short List", () => <WorkoutStats exerciseList={workouts}/>)
  .add("Long List", () => <WorkoutStats exerciseList={workoutsLong} onClick={action("button-clicked")}/>)


storiesOf("StatListItem", module)
  .add("Base", () => <StatListItem exercise={workouts[1]}/>)

storiesOf("StatTable", module)
  .add("Basic Table", () => <StatTable exercise={workouts[1]} list={workouts}/>)

storiesOf("Stat History Table", module)
  .add("Basic Table", () => <StatHistoryTable workoutlist={userWorkouts}/>)

storiesOf("Empty Workouts", module)
  .add("Empty, add workout", () => <EmptyWorkouts/>)
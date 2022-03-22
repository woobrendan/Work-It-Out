import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import WorkoutStats from "../src/components/workout_stats"
import StatListItem from "../src/components/statListItem";

const workouts = [
  {
    id: 1,
    weight: 160,
    reps: 5,
    sets: 3,
    user_id: 1,
    exercise_id: 1,
    name: "Barbell Bench Press",
    description: "The Barbell Bench Press is an upper-body weight training exercise where you push a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    video: "https://www.youtube.com/embed/CjHIKDQ4RQo",
    muscle_group_id: 1
  },
  {
    id: 2,
    weight: 130,
    reps: 6,
    sets: 3,
    user_id: 1,
    exercise_id: 2,
    name: "Incline Dumbell Bench Press",
    description: "An incline press elevates the shoulders and lowers the pelvis as if reclining in a chair. Press weights overhead and conctract by bringing hands towards shoulders. This variation of the bench press emphasizes anterior deltoids with little emphasis at the upper (clavicular) head of the pectoralis major.",
    thumbnail: "https://www.burnthefatinnercircle.com/members/images/1749.jpg",
    video: "https://www.youtube.com/embed/oZVCBM9f8Eo",
    muscle_group_id: 1
  }]

storiesOf("WorkoutStats", module)
  .add("Base", () => <WorkoutStats exerciseList={workouts}/>)

storiesOf("StatListItem", module)
  .add("Base", () => <StatListItem exercise={workouts[1]}/>)
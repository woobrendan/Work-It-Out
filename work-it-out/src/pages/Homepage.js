import {useState} from "react";
import MuscleGroup from "../components/MuscleGroup";

export default function Homepage() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: "Leg exercise",
      thumbnail:
        "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    },
    {
      id: 2,
      name: "Leg exercise2",
      thumbnail:
        "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    },
    {
      id: 3,
      name: "Leg exercise3",
      thumbnail:
        "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    },
    {
      id: 4,
      name: "Leg exercise4",
      thumbnail:
        "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
    },
  ]);
  return (
    <div>
      <h2>Muscles Groups</h2>
      {workouts.map((workout) => (
        <MuscleGroup
          id={workout.id}
          image={workout.thumbnail}
          title={workout.name}
        />
      ))}
    </div>
  );
}

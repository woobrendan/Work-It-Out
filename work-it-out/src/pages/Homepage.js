import { useState, useEffect } from "react";
import MuscleGroup from "../components/MuscleGroup";

export default function Homepage() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/musclegroups")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Muscles Groups</h2>
      {workouts.map((workout) => (
        <MuscleGroup
          key={workout.id}
          id={workout.id}
          image={workout.thumbnail}
          title={workout.name}
        />
      ))}
    </div>
  );
}

import {useState, useEffect} from "react";
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
  useEffect(() => {
    fetch("http://localhost:8080/api/workouts")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((err) => console.log(err))
  }, [])
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

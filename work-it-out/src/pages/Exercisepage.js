import { useState, useEffect } from "react";
import MuscleGroup from "../components/MuscleGroup";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function ExercisePage() {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/musclegroups/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>
        <span>Exercises</span>

        <Link to="/">
          <ArrowBackIcon sx={{ fontSize: 60 }} />
        </Link>
      </h2>
      {exercises.map((exercise) => (
        <MuscleGroup
          key={exercise.id}
          id={exercise.id}
          image={exercise.thumbnail}
          title={exercise.name}
          type="exercise"
        />
      ))}
    </div>
  );
}

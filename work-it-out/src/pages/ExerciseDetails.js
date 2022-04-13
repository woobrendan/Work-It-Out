import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../App.css";

import { Link } from "react-router-dom";

export default function ExerciseDetails() {
  const [exercise, setExercise] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExercise(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="exercise-details">
      <div className="exercise-img-container">
        <img
          src={exercise.thumbnail}
          style={{ width: "100%", height: "auto" }}
          alt={exercise.name}
        />
      </div>
      <div>
        <h2>
          <span>{exercise.name}</span>
          <Link to={`/workout/${id}`}>
            <ArrowBackIcon sx={{ fontSize: 60 }} />
          </Link>
        </h2>
        <p className="exercise-content">{exercise.description}</p>
        <br></br>
        <br></br>
        <div className="iFrame-container">
          <iframe
            width="100%"
            height="315"
            src={exercise.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

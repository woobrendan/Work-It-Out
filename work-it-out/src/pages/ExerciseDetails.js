import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div>
        <img
          src={exercise.thumbnail}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <h1>
          <span>{exercise.name}</span> <a href={`/workout/${id}`}>Back</a>
        </h1>
        <p className="exercise-content">{exercise.description}</p>
        <div>
          <h2>Exercising Video</h2>
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

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ExerciseDetails() {
  const [exercise, setExercise] = useState({});
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExercise(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="exercise-details">
      <div>
        <img
          src={exercise.thumbnail}
          style={{width: "100%", height: "auto"}}
        />
      </div>
      <div>
        <h2><span>{exercise.name}</span> <a href={`/workout/${id}`}><ArrowBackIcon sx={{fontSize: 60}} /></a></h2>
        <p className="exercise-content">{exercise.description}</p>
        <br></br>
        <br></br>
        <div>
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

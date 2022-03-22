import {useState} from "react";


export default function ExerciseDetails() {
  const image = 'https://www.burnthefatinnercircle.com/members/images/1691.jpg';
  const [exercise, setExercise] = useState(
    {
      id: 1,
      name: "Leg exercise",
      thumbnail:
        "https://www.burnthefatinnercircle.com/members/images/1691.jpg",
      video: 'https://www.youtube.com/embed/CjHIKDQ4RQo',
      description: "The Barbell Bench Press is an upper-body weight training exercise where you push a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles."
    },
  );
  return (
    <div className="exercise-details">
      <div>
        <img src={exercise.thumbnail} style={{width: "100%", height: "auto"}} />
      </div>
      <div>
        <h1>{exercise.name}</h1>
        <p className="exercise-content">{exercise.description}</p>
        <div>
          <h2>Exercising Video</h2>
          <iframe width="100%" height="315" src={exercise.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  );

}
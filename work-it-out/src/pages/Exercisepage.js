import MuscleGroup from '../components/MuscleGroup';


export default function ExercisePage() {
  return (
    <div>
      <h2>Exercises</h2>
      <MuscleGroup id={1} image={"/logo192.png"} title={"Exercise 1"} />
      <MuscleGroup id={2} image={"/logo192.png"} title={"Exercise 2"} />
      <MuscleGroup id={3} image={"/logo192.png"} title={"Exercise 3"} />
      <MuscleGroup id={4} image={"/logo192.png"} title={"Exercise 4"} />
    </div>);
}
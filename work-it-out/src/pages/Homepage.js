import MuscleGroup from '../components/MuscleGroup';


export default function Homepage() {
  return (
    <div>
      <h2>Muscles Groups</h2>
      <MuscleGroup id={1} image={"/logo192.png"} title={"Legs"} />
      <MuscleGroup id={2} image={"/logo192.png"} title={"Chest"} />
      <MuscleGroup id={3} image={"/logo192.png"} title={"Arms"} />
      <MuscleGroup id={4} image={"/logo192.png"} title={"Back"} />
    </div>);
}
const workoutIdSorter = (exerciseList) => {
  const uniqueWorkouts = []
  for (const exercise of exerciseList) {
    const workoutId = exercise.workout_num;
    if (!uniqueWorkouts.includes(workoutId)) {
      uniqueWorkouts.push(workoutId);
    }
  }
  return uniqueWorkouts;
}


//sorts a list of exercises returns an array, where at each index, there is an array containing exercise that pertain to one workout. ie. index 0 holds list of exercises for workout 1, and index 1 holds list of exercises for workout 2
const groupWorkouts = (exerciseList) => {
  const workoutIds = workoutIdSorter(exerciseList);
  const workoutsAll = [];
  for (const id of workoutIds) {
    const workouts = [];
    for (const exercise of exerciseList) {
      if (exercise.workout_num === id) {
        workouts.push(exercise);
      }
    }
    workoutsAll.push(workouts);
  }
  return workoutsAll;
}


module.exports = {groupWorkouts}
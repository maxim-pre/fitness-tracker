import ExerciseBox from "./exerciseBox";
const Workout = ({ workout }) => {
  const numExercises = workout.exercises.length;
  let width;
  if (numExercises === 2) {
    width = "md:w-[66.6%]";
  } else if (numExercises === 1) {
    width = "md:w-[33.3%]";
  } else {
    width = "";
  }
  return (
    <div className="mb-8 ">
      <div
        className={`flex justify-between pl-4 bg-blue-600 rounded p-1 ${width}`}
      >
        <h1 className="text-center text-white font-bold text-lg">
          {workout.name ? workout.name : "Untitled"}
        </h1>
        <div className="">
          <button className="bg-blue-50 rounded p-1 text-blue-700 font-semibold mx-2">
            Update
          </button>
          <button className="bg-red-500 rounded p-1 text-white font-semibold mx-2">
            Delete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center">
        {workout.exercises.map((exercise, index) => {
          return <ExerciseBox exercise={exercise} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Workout;

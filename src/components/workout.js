import ExerciseBox from "./exerciseBox";
const Workout = ({ workout, handleDelete, handleUpdate }) => {
  const width = workout.exercises.length;
  const style = width < 3 ? `grid-cols-${width}` : "grid-cols-3";

  return (
    <div className="mb-6  ">
      <div
        className={`flex justify-between pl-4 bg-blue-600 rounded p-1 bg-gradient-to-tr from-blue-500`}
      >
        <h1 className="text-center text-white font-bold text-md">
          {workout.name ? workout.name : "Untitled"}
        </h1>
        <div className="">
          <button
            className="bg-blue-50 rounded p-1 text-blue-700 font-semibold mx-2 text-sm shadow-lg"
            onClick={() => {
              handleUpdate(workout);
            }}
          >
            Update
          </button>
          <button
            className="bg-red-500 rounded p-1 text-white font-semibold mx-2 text-sm shadow-lg"
            onClick={() => {
              handleDelete(workout);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={`grid ${style} text-center shadow-md `}>
        {workout.exercises.map((exercise, index) => {
          return <ExerciseBox exercise={exercise} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Workout;

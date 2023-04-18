// exercise {name:'', sets:[]}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const WorkoutExercise = ({
  exercise,
  handleAddSet,
  handleRemoveExercise,
  handleRemoveSet,
  handleRepsChange,
  handleWeightChange,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 my-4">
        <h1>{exercise.name}</h1>
        <button
          className="bg-red-300 p-1 rounded-md text-sm"
          onClick={(e) => {
            e.preventDefault();
            handleRemoveExercise(exercise);
          }}
        >
          Remove
        </button>
      </div>
      <hr />
      <div className="grid grid-cols-7 text-center my-4">
        <h2 className="col-span-2">Set</h2>
        <h2 className="col-span-2"> weight-Kg</h2>
        <h2 className="col-span-2">reps</h2>
        <h2></h2>
      </div>
      {exercise.sets.map((set, index) => {
        return (
          <div className="grid grid-cols-7 text-center my-2" key={index}>
            <h2 className="col-span-2">{index + 1}</h2>
            <input
              value={set.weight}
              className=" w-14 mx-auto my-auto  bg-gray-300 rounded-xl h-4 text-center col-span-2"
              onChange={(e) => {
                handleWeightChange(exercise, index, e.target.value);
              }}
            />
            <input
              value={set.reps}
              className=" w-14 mx-auto my-auto  bg-gray-300 rounded-xl h-4 text-center col-span-2"
              onChange={(e) => {
                handleRepsChange(exercise, index, e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleRemoveSet(exercise, index);
              }}
            >
              <FontAwesomeIcon icon={faXmark} className="text-gray-400" />
            </button>
          </div>
        );
      })}
      <button
        className="w-full bg-gray-300 rounded-lg mt-4 duration-200"
        onClick={(e) => {
          e.preventDefault();
          handleAddSet(exercise);
        }}
      >
        Add set
      </button>
    </div>
  );
};

export default WorkoutExercise;

import SimpleExercise from "./simpleExercise";
import { useState } from "react";

const AddExerciseBox = ({ exercises, handleAddExercise, handleSearch }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const handleAddToSelectedExercises = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises([
        ...selectedExercises.filter((e) => e !== exercise),
      ]);
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };
  return (
    <div className=" shadow-lg rounded-lg my-4 pb-4 flex items-center justify-center flex-col w-full">
      <div className="flex justify-between w-full bg-blue-500 rounded mb-4 px-4 items-center">
        <div></div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-500 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-700 focus:outline-none focus:border-1 block mx-auto  p-1 placeholder:text-gray-500 my-4"
          placeholder="Search exercise..."
          onChange={(e) => handleSearch(e)}
        />
        <button
          className="text-blue-700 font-bold bg-white h-8 px-2 rounded"
          onClick={(e) => {
            e.preventDefault();
            handleAddExercise(selectedExercises);
          }}
        >
          {`Add ${
            selectedExercises.length >= 1 ? `(${selectedExercises.length})` : ""
          }`}
        </button>
      </div>
      {exercises.length === 0 ? (
        <h1 className="">no matching exercises</h1>
      ) : (
        ""
      )}
      <div className="w-full flex flex-col overflow-auto max-h-80">
        {exercises.map((exercise, index) => {
          return (
            <SimpleExercise
              exercise={exercise}
              key={index}
              handleAddExercise={handleAddToSelectedExercises}
              selected={selectedExercises.includes(exercise) ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddExerciseBox;

import { useState } from "react";
import SimpleExercise from "./simpleExercise";
import WorkoutExercise from "./workoutExercise";
const NewWorkout = ({ exercises }) => {
  const [workout, setWorkout] = useState({ name: "", exercises: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const [addExercise, setAddExercise] = useState(false);
  const maxLen = 3;
  let filtered = exercises;
  if (searchQuery) {
    filtered = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    });
  }
  const filteredExercises = filtered.slice(0, maxLen);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddExercise = (exercise) => {
    const exercisesCopy = [...workout.exercises];
    if (exercisesCopy.find((ex) => ex.name === exercise.name))
      return setAddExercise(false);
    exercisesCopy.push({ name: exercise.name, sets: [] });
    setWorkout({ ...workout, exercises: exercisesCopy });
    setAddExercise(false);
  };

  const handleAddSet = (exercise) => {
    let exercisesCopy = [...workout.exercises];
    exercisesCopy = exercisesCopy.map((ex) => {
      if (ex.name === exercise.name) {
        ex.sets.length >= 1
          ? ex.sets.push({ ...ex.sets[ex.sets.length - 1] })
          : ex.sets.push({ weight: 0, reps: 0 });
      }
      return ex;
    });
    setWorkout({ ...workout, exercises: exercisesCopy });
  };

  const handleRemoveExercise = (exercise) => {
    let exercisesCopy = [...workout.exercises];
    exercisesCopy = exercisesCopy.filter((ex) => {
      return ex !== exercise;
    });
    setWorkout({ ...workout, exercises: exercisesCopy });
  };

  const handleRemoveSet = (exercise, setIndex) => {
    let exercisesCopy = [...workout.exercises];
    exercisesCopy = exercisesCopy.map((ex) => {
      if (ex.name === exercise.name) {
        let sets = [...ex.sets];
        sets.splice(setIndex, 1);
        ex.sets = sets;
      }
      return ex;
    });
    setWorkout({ ...workout, exercises: exercisesCopy });
  };

  const handleRepsChange = (exercise, setIndex, value) => {
    let exercisesCopy = [...workout.exercises];
    exercisesCopy = exercisesCopy.map((ex) => {
      if (ex.name === exercise.name) {
        ex.sets = ex.sets.map((set) => {
          if (ex.sets.indexOf(set) === setIndex) {
            set.reps = value;
          }
          return set;
        });
      }
      return ex;
    });
    setWorkout({ ...workout, exercises: exercisesCopy });
  };

  const handleWeightChange = (exercise, setIndex, value) => {
    let exercisesCopy = [...workout.exercises];
    exercisesCopy = exercisesCopy.map((ex) => {
      if (ex.name === exercise.name) {
        ex.sets = ex.sets.map((set) => {
          if (ex.sets.indexOf(set) === setIndex) {
            set.weight = value;
          }
          return set;
        });
      }
      return ex;
    });
    setWorkout({ ...workout, exercises: exercisesCopy });
  };

  return (
    <div className="flex justify-center mb-24 mx-8">
      <form className="flex flex-col w-full">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Workout Name..."
            className="text-4xl outline-none"
            value={workout.name}
            onChange={(e) => {
              setWorkout({ ...workout, name: e.target.value });
            }}
          />
          <button
            className="bg-blue-700 text-white rounded px-6 focus:bg-blue-900 mt-2"
            onClick={(e) => {
              e.preventDefault();
              console.log(workout);
            }}
          >
            save
          </button>
        </div>
        {/* add exercise button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setAddExercise(!addExercise);
          }}
          className="bg-blue-100 rounded text-blue-500 font-bold focus:bg-gray-400 mt-8"
        >
          Add exercise
        </button>
        {/* add exercise */}
        {addExercise && (
          <div className="border border-gray-600 my-4 pb-4 flex items-center justify-center flex-col w-full">
            <input
              type="text"
              className="bg-gray-50 border border-gray-500 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-700 focus:outline-none focus:border-1 block mx-auto  p-1 placeholder:text-gray-500 my-4"
              placeholder="Search exercise..."
              onChange={(e) => handleSearch(e)}
            />
            {filteredExercises.length === 0 ? (
              <h1 className="">no matching exercises</h1>
            ) : (
              ""
            )}
            <div className="w-full flex flex-col">
              {filteredExercises.map((exercise, index) => {
                return (
                  <SimpleExercise
                    exercise={exercise}
                    key={index}
                    handleAddExercise={handleAddExercise}
                  />
                );
              })}
            </div>
          </div>
        )}
        {/* end add exercise */}
        {workout.exercises.map((exercise, index) => {
          return (
            <WorkoutExercise
              key={index}
              exercise={exercise}
              handleAddSet={handleAddSet}
              handleRemoveSet={handleRemoveSet}
              handleRemoveExercise={handleRemoveExercise}
              handleRepsChange={handleRepsChange}
              handleWeightChange={handleWeightChange}
            />
          );
        })}
      </form>
    </div>
  );
};

export default NewWorkout;

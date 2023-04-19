import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleExercise from "./simpleExercise";
import WorkoutExercise from "./workoutExercise";
import AddExerciseBox from "./addExerciseBox";
const NewWorkout = ({ exercises, workoutData, handleUpdateWorkout }) => {
  const [workout, setWorkout] = useState(
    workoutData ? { ...workoutData } : { name: "", exercises: [] }
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [addExercise, setAddExercise] = useState(false);
  const navigate = useNavigate();
  let filtered = exercises;
  if (searchQuery) {
    filtered = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    });
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddExercise = (exerciseList) => {
    const exercisesCopy = [...workout.exercises];
    exerciseList.forEach((exercise) => {
      if (!exercisesCopy.find((ex) => ex.name === exercise.name)) {
        exercisesCopy.push({
          name: exercise.name,
          sets: [{ weight: 0, reps: 0 }],
        });
      }
    });

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

  const handleSubmit = () => {
    if (!localStorage.getItem("workouts")) {
      window.localStorage.setItem("workouts", JSON.stringify([]));
    }
    const workouts = JSON.parse(window.localStorage.getItem("workouts"));
    workouts.push(workout);
    window.localStorage.setItem("workouts", JSON.stringify(workouts));
    navigate("/");
  };

  return (
    <div className="flex justify-center mb-24 mx-8">
      <form className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <input
            type="text"
            placeholder="Workout Name..."
            className=" text-xl outline-none text-blue-700 font-bold "
            value={workout.name}
            onChange={(e) => {
              setWorkout({ ...workout, name: e.target.value });
            }}
          />
          <button
            className="bg-blue-700 text-white rounded px-6 focus:bg-blue-900 mt-2 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              handleUpdateWorkout
                ? handleUpdateWorkout(workout)
                : handleSubmit();
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
          <AddExerciseBox
            exercises={filtered}
            handleAddExercise={handleAddExercise}
            handleSearch={handleSearch}
          />
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

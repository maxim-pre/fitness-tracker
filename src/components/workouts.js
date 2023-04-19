import Pagination from "./pagination";
import { useState } from "react";
import Workout from "./workout";
import { useNavigate } from "react-router-dom";
const Workouts = () => {
  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts"))
  );
  const navigate = useNavigate();

  const handleDelete = (workout) => {
    let workoutsCopy = [...workouts];
    workoutsCopy = workoutsCopy.filter((workoutEntry) => {
      return workoutEntry !== workout;
    });
    window.localStorage.setItem("workouts", JSON.stringify(workoutsCopy));
    return setWorkouts(workoutsCopy);
  };

  const handleUpdate = (workout) => {
    let workoutsCopy = [...workouts];
    const index = workoutsCopy.findIndex((workoutEntry) => {
      return workoutEntry === workout;
    });
    navigate(`/update/${index}`);
  };
  return (
    <div>
      <h1 className="text-gray-700 text-lg mb-8 font-bold underline">
        My workouts
      </h1>
      <div className="flex flex-col mx-6">
        {workouts.map((workout, index) => {
          return (
            <Workout
              workout={workout}
              key={index}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Workouts;

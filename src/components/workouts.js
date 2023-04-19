import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import Workout from "./workout";
const Workouts = () => {
  // state
  const [currentPage, setCurrentPage] = useState(1);
  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts"))
  );
  // constants and variables
  const navigate = useNavigate();
  const pageSize = 3;
  const startIndex = (currentPage - 1) * pageSize;
  let itemsCount = workouts.length;
  let filteredWorkouts = workouts.slice(startIndex, startIndex + pageSize);
  // functions
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
        {filteredWorkouts.map((workout, index) => {
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
      <div className="">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsCount={itemsCount}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Workouts;

import Pagination from "./pagination";
import { useState } from "react";
import Workout from "./workout";
const Workouts = () => {
  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts"))
  );
  const testWorkout = workouts[2];
  console.log(testWorkout);
  return (
    <div>
      <h1 className="text-gray-700 text-lg mb-8 font-bold underline">
        My workouts
      </h1>
      <div className="flex flex-col mx-6">
        {workouts.map((workout, index) => {
          return <Workout workout={workout} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Workouts;

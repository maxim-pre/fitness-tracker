import { useParams } from "react-router-dom";
import NewWorkout from "./newWorkout";
import { useNavigate } from "react-router-dom";

const UpdateWorkout = ({ exercises }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  let workoutsData = JSON.parse(localStorage.getItem("workouts"));
  const handleUpdateWorkout = (workout) => {
    workoutsData.splice(id, 1);
    workoutsData.splice(id, 0, workout);
    window.localStorage.setItem("workouts", JSON.stringify(workoutsData));
    navigate("/");
  };
  return (
    <NewWorkout
      workoutData={workoutsData[id]}
      exercises={exercises}
      handleUpdateWorkout={handleUpdateWorkout}
    />
  );
};

export default UpdateWorkout;

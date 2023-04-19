import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileNav from "./components/mobileNav";
import MobileNavBar from "./components/mobileNavBar";
import Nav from "./components/nav";
import Exercises from "./components/exercises";
import Workouts from "./components/workouts";
import NewWorkout from "./components/newWorkout";
import UpdateWorkout from "./components/updateWorkout";
import NotFound from "./components/notFound";
function App() {
  const [nav, setNav] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?language=2&limit=1000")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const exercises = result.results;
        fetch("https://wger.de/api/v2/exerciseimage/?limit=1000")
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            const exerciseImageObjects = result.results;
            const validExerciseBases = exerciseImageObjects.map((image) => {
              return image["exercise_base"];
            });

            const validExercises = exercises.filter((exercise) => {
              return validExerciseBases.includes(exercise["exercise_base"]);
            });

            const validExerciseWithImage = validExercises.map((exercise) => {
              const imgObj = exerciseImageObjects.find((img) => {
                return (
                  img["exercise_base"] === exercise["exercise_base"] &&
                  img["is_main"] === true
                );
              });
              return { ...exercise, image: imgObj["image"] };
            });

            const stateExercises = validExerciseWithImage.map((exercise) => {
              return {
                name: exercise.name,
                description: exercise.description,
                img: exercise.image,
              };
            });
            setExercises(stateExercises);
          });
      });
  }, []);

  return (
    <div className="relative min-h-screen md:flex App">
      {/* mobile Nav */}
      <MobileNavBar nav={nav} setNav={setNav} />
      {nav && <MobileNav nav={nav} setNav={setNav} />}
      {/* side Nav */}
      <Nav />
      {/* content */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path={"/"} element={<Workouts />} />
          <Route
            path={"/exercises"}
            element={<Exercises exercises={exercises} />}
          />
          <Route
            path={"/new_workout"}
            element={<NewWorkout exercises={exercises} />}
          />
          <Route
            path={"update/:id"}
            element={<UpdateWorkout exercises={exercises} />}
          />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

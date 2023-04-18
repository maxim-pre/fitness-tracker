const ExerciseBox = ({ exercise }) => {
  return (
    <div className="shadow-md ">
      <h1 className="py-1 font-semibold">{exercise.name}</h1>
      <div>
        {exercise.sets.map((set, index) => {
          return (
            <div key={index} className="flex justify-center my-2">
              <p className="bg-gray-300 rounded px-1 mx-4">{index + 1}</p>
              <p className="mx-4">
                {set.reps} x {set.weight}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseBox;

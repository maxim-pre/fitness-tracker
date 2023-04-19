const SimpleExercise = ({ exercise, handleAddExercise, selected }) => {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-1  grid-flow-row-dense  mx-4  p-2 rounded  ${
        !selected && "hover:bg-gray-200"
      } cursor-pointer simpleExerciseBorder ${selected && "bg-blue-200 "} `}
      onClick={() => {
        handleAddExercise(exercise);
      }}
    >
      <div className="col-span-1 m-auto  ">
        <p className="font-bold ">{exercise.name}</p>
      </div>
      <div className="col-span-1 ">
        <img src={exercise.img} className=" mx-auto h-12 w-16" />
      </div>
    </div>
  );
};

export default SimpleExercise;

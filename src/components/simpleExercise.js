const SimpleExercise = ({ exercise, handleAddExercise }) => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-1  grid-flow-row-dense  mx-4  p-2 rounded shadow-sm hover:bg-gray-200 cursor-pointer  border-b-2 border-gray-200"
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

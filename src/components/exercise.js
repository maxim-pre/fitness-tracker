const Exercise = ({ exercise }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-6 md:grid-rows-1 grid-flow-row-dense  my-4 mx-4 md:border-l-8 border-blue-700 p-2 rounded shadow-md">
      <div className="col-span-1 m-auto  ">
        <p className="font-bold text-lg">{exercise.name}</p>
      </div>
      <div className="col-span-3 m-auto">
        <p className="">{exercise.description}</p>
      </div>
      <div className="col-span-2 ">
        <img src={exercise.img} className="h-52 mx-auto" />
      </div>
    </div>
  );
};

export default Exercise;

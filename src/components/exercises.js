import Exercise from "./exercise";
import { useState } from "react";
import Pagination from "./pagination";

const Exercises = ({ exercises }) => {
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const startIndex = (currentPage - 1) * pageSize;
  let filtered = exercises;
  if (searchQuery) {
    filtered = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    });
  }

  let filteredExercises = filtered.slice(startIndex, startIndex + pageSize);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-blue-900 text-xl mb-2 font-bold ">Exercises</h1>
      <input
        type="text"
        className="bg-gray-50 border border-gray-500 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-700 focus:outline-none focus:border-1 block mx-auto  p-2.5 placeholder:text-gray-500 mt-4"
        placeholder="Search exercise..."
        onChange={(e) => handleSearch(e)}
      />
      <div className="w-full flex flex-col">
        {filteredExercises.map((exercise, index) => {
          return <Exercise exercise={exercise} key={index} />;
        })}
      </div>
      <div className="mx-auto">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsCount={filtered.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Exercises;

import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu */}
      <div
        className={`bg-gray-800 text-gray-100 flex justify-between md:hidden ${
          nav && "hidden"
        }`}
      >
        {/* logo */}
        <div className="flex justify-center items-center text-xl font-bold px-4">
          <span>Fitness Tracker</span>
          <FontAwesomeIcon icon={faDumbbell} className="px-5" />
        </div>
        <button className="p-4 focus:bg-gray-700" onClick={() => setNav(!nav)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* mobile nav */}
      {nav && (
        <div className="absolute w-full h-screen bg-blue-700 z-10">
          <nav className="w-full h-full flex justify-center items-center flex-col text-white text-2xl">
            <div
              className="absolute top-0 right-0 mx-4 my-4 text-4xl"
              onClick={() => setNav(!nav)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>

            <a className="block py-8  px-2 my-4 " onClick={() => setNav(!nav)}>
              <Link to={"/hello"}>exercises</Link>
            </a>
            <a className="block py-8  px-2 my-4" onClick={() => setNav(!nav)}>
              <Link to={"/"}>My workouts</Link>
            </a>
            <a className="block py-8  px-2 my-4" onClick={() => setNav(!nav)}>
              <Link to={"/"}>Log a new workout</Link>
            </a>
          </nav>
        </div>
      )}
      {/* sidebar */}
      <aside className="bg-blue-700 text-blue-100 w-64 space-y-6 py-7 px-4 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
        {/* logo */}
        <div className="flex justify-center items-center text-xl font-bold">
          <span>Fitness Tracker</span>
          <FontAwesomeIcon icon={faDumbbell} className="px-5" />
        </div>
        <hr />
        <nav className="">
          <a className="block py-2.5 hover:bg-blue-500 rounded px-2">
            <Link to={"/"}>exercises</Link>
          </a>
          <a className="block py-2.5 hover:bg-blue-500 rounded px-2">
            <Link to={"/"}>My workouts</Link>
          </a>
          <a className="block py-2.5 hover:bg-blue-500 rounded px-2">
            <Link to={"/"}>Log a new workout</Link>
          </a>
        </nav>
      </aside>
      {/* content */}
      <div className="flex-1 p-4">content</div>
    </div>
  );
}

export default App;

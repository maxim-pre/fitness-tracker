import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MobileNavLink from "./mobileNavLink";

const MobileNav = ({ nav, setNav }) => {
  return (
    <div className="absolute w-full h-screen bg-blue-700 z-10">
      <nav className="w-full h-full flex justify-center items-center flex-col text-white text-2xl">
        <div
          className="absolute top-0 right-0 mx-4 my-4 text-4xl"
          onClick={() => setNav(!nav)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <MobileNavLink
          url={"/exercises"}
          text={"Exercises"}
          nav={nav}
          setNav={setNav}
        />
        <MobileNavLink
          url={"/"}
          text={"My workouts"}
          nav={nav}
          setNav={setNav}
        />
        <MobileNavLink
          url={"/new_workout"}
          text={"Log workout"}
          nav={nav}
          setNav={setNav}
        />
      </nav>
    </div>
  );
};

export default MobileNav;

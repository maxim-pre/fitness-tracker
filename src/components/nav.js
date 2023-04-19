import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

import NavLink from "./navLink";
import Logo from "./logo";
const Nav = () => {
  return (
    <aside className="bg-blue-700 text-blue-100 w-64 space-y-6 py-7 px-4 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
      {/* logo */}
      <Logo />
      <hr />
      <nav>
        <NavLink
          url={"/"}
          text={"My workouts"}
          icon={<FontAwesomeIcon icon={faBook} className="px-5" />}
        />
        <NavLink
          url={"/new_workout"}
          text={"Log workout"}
          icon={<FontAwesomeIcon icon={faClipboard} className="px-5" />}
        />
        <NavLink
          url={"/exercises"}
          text={"Exercises"}
          icon={<FontAwesomeIcon icon={faPersonWalking} className="px-5" />}
        />
      </nav>
      <Footer />
    </aside>
  );
};

export default Nav;

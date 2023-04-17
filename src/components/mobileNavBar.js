import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
const MobileNavBar = ({ nav, setNav }) => {
  return (
    <div
      className={`bg-gray-800 p-4 text-gray-100 flex justify-between md:hidden ${
        nav && "hidden"
      }`}
    >
      {/* logo */}
      <Logo />
      <button className="focus:bg-gray-700" onClick={() => setNav(!nav)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default MobileNavBar;

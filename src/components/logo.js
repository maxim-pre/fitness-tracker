import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex justify-center items-center text-xl font-bold">
      <span>Fitness Tracker</span>
      <FontAwesomeIcon icon={faDumbbell} className="px-5" />
    </div>
  );
};

export default Logo;

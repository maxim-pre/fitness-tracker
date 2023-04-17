import { Link } from "react-router-dom";
const NavLink = ({ url, text }) => {
  return (
    <li className="block py-2.5 hover:bg-blue-500 rounded px-2">
      <Link to={url}>{text}</Link>
    </li>
  );
};

export default NavLink;

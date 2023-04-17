import { Link } from "react-router-dom";

const MobileNavLink = ({ url, text, nav, setNav }) => {
  return (
    <li className="block py-8  px-2 my-4 " onClick={() => setNav(!nav)}>
      <Link to={url}>{text}</Link>
    </li>
  );
};

export default MobileNavLink;

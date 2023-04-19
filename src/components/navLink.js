import { Link } from "react-router-dom";
const NavLink = ({ url, text, icon }) => {
  return (
    <Link to={url}>
      {
        <li className="block py-2.5 hover:bg-blue-500 rounded px-2 text-lg my-4">
          <div className="flex justify-left items-center  ">
            <div className="w-8 flex justify-center items-center mr-2">
              {icon}
            </div>{" "}
            {text}
          </div>
        </li>
      }
    </Link>
  );
};

export default NavLink;

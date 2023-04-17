import NavLink from "./navLink";
import Logo from "./logo";
const Nav = () => {
  return (
    <aside className="bg-blue-700 text-blue-100 w-64 space-y-6 py-7 px-4 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
      {/* logo */}
      <Logo />
      <hr />
      <nav>
        <NavLink url={"/exercises"} text={"Exercises"} />
        <NavLink url={"/"} text={"My workouts"} />
        <NavLink url={"/new_workout"} text={"Log workout"} />
      </nav>
    </aside>
  );
};

export default Nav;

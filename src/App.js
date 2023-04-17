import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./components/mobileNav";
import MobileNavBar from "./components/mobileNavBar";
import Nav from "./components/nav";
function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile Nav */}
      <MobileNavBar nav={nav} setNav={setNav} />
      {nav && <MobileNav nav={nav} setNav={setNav} />}
      {/* side Nav */}
      <Nav />
      {/* content */}
      <div className="flex-1 p-4">content</div>
    </div>
  );
}

export default App;

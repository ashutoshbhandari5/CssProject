import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Home() {
  const [sideBar, toggleSideBar] = useState(false);
  return (
    <div className="home">
      {sideBar && <SideBar toggleSideBar={toggleSideBar} />}
      <NavBar toggleSideBar={toggleSideBar} />
    </div>
  );
}

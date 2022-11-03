import React from "react";
import NavbarPages from "./NavbarPages";

const SideBar = () => {
  return (
    <div className="sidebar">
      <button className="close"></button>
      <NavbarPages />
    </div>
  );
};

export default SideBar;

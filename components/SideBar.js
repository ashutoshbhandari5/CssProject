import React from "react";
import NavbarPages from "./common/NavbarPages";

const SideBar = ({ sideBar, toggleSideBar }) => {
  const sideBarVisiblity = sideBar ? "show" : "hidden";
  return (
    <div className={`sidebar ${sideBarVisiblity}`}>
      <h1>Logistics Company</h1>
      <button onClick={toggleSideBar} className="close"></button>
      <div className="links">
        <NavbarPages />
      </div>
    </div>
  );
};

export default SideBar;

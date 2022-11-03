import React from "react";

const Hamburger = ({ toggleSideBar }) => {
  return (
    <div onClick={toggleSideBar} className="hamburger-lines">
      <span className="line linetoggleSideBar1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  );
};

export default Hamburger;

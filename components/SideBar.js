import React from "react";
import NavbarPages from "./common/NavbarPages";
import { socialMedia } from "../utils/lists";
import { SocialIcon } from "react-social-icons";

const SideBar = ({ sideBar, toggleSideBar }) => {
  const sideBarVisiblity = sideBar ? "show" : "hidden";
  return (
    <div className={`sidebar ${sideBarVisiblity}`}>
      <h1>Logistics Company</h1>
      <button onClick={toggleSideBar} className="close"></button>
      <div className="links">
        <NavbarPages />
      </div>
      <div className="subscribe">
        <p>Subscribe for a newsletter</p>
        <input type="email" placeholder="Email" />
      </div>
      <p className="connect">Connect with Us</p>
      <div className="social-network">
        {socialMedia.map((el, i) => (
          <SocialIcon
            style={{ margin: "0.5em", height: 35, width: 35 }}
            key={i}
            network={el}
          />
        ))}
      </div>
      <p className="copyright">&copy; 2022 Logistics </p>
    </div>
  );
};

export default SideBar;

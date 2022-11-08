import React from "react";
import NavbarPages from "./common/NavbarPages";
import { socialMedia } from "../utils/lists";
import { SocialIcon } from "react-social-icons";

const SideBar = ({ sideBar, toggleSideBar }) => {
  const sideBarVisiblity = sideBar ? "show" : "hidden";
  return (
    <aside className={`sidebar ${sideBarVisiblity}`}>
      <h1 className="sidebar-header">Logistics Company</h1>
      <button onClick={toggleSideBar} className="sidebar_close-icon"></button>
      <div className="sidebar-links">
        <NavbarPages />
      </div>
      <div className="sidebar-subscribe">
        <p>Subscribe for a newsletter</p>
        <input
          className="sidebar-subscribe_input"
          type="email"
          placeholder="Email"
        />
      </div>
      <p className="sidebar_connect-title">Connect with Us</p>
      <div className="sidebar_social-network">
        {socialMedia.map((el, i) => (
          <SocialIcon
            style={{ margin: "0.5em", height: 35, width: 35 }}
            key={i}
            network={el}
          />
        ))}
      </div>
      <p className="copyright">&copy; 2022 Logistics </p>
    </aside>
  );
};

export default SideBar;

import Hamburger from "./Hamburger";
import NavbarPages from "./common/NavbarPages";

const NavBar = ({ toggleSideBar }) => {
  return (
    <div className="navbar">
      <Hamburger toggleSideBar={toggleSideBar} />
      <div className="nav-content">
        <h1>Logistics Company</h1>
        <NavbarPages />
      </div>
    </div>
  );
};

export default NavBar;

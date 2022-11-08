import Hamburger from "./Hamburger";
import NavbarPages from "./common/NavbarPages";

const NavBar = ({ toggleSideBar }) => {
  return (
    <nav className="navbar">
      <Hamburger toggleSideBar={toggleSideBar} />
      <div className="nav-content">
        <h1 className="nav-logo">Logistics Company</h1>
        <NavbarPages />
      </div>
    </nav>
  );
};

export default NavBar;

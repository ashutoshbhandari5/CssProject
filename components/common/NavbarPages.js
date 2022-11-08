import React from "react";
import Link from "next/link";
import { navBarLinks } from "../../utils/lists";

const NavbarPages = () => {
  return (
    <ul className="navpages">
      {navBarLinks.map((el, i) => {
        return (
          <li className="navpage-item" key={i}>
            <Link href={el.link}>{el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarPages;

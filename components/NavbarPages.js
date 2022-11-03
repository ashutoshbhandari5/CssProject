import Link from "next/link";
import React from "react";

const NavbarPages = () => {
  return (
    <ul className="navPages">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
    </ul>
  );
};

export default NavbarPages;

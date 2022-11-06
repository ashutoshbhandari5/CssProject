import { useState } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <div className="home">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <NavBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

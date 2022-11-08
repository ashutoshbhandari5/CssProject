import React from "react";
import { benefits, company } from "../utils/lists";

const Hero = () => {
  const renderBullets = (item) => {
    return (
      <div className={item.css}>
        <h3 className="bullet-header">{item.header}</h3>
        <ul className="bullet-list">
          {item.list.map((el, i) => {
            return (
              <li className="bullet-list_item" key={i}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-content_header">Logistics Company</h1>
        <div>
          {renderBullets(benefits)}
          {renderBullets(company)}
        </div>
      </div>
    </section>
  );
};

export default Hero;

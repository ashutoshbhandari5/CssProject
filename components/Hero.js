import React from "react";
import { benefits, company } from "../utils/lists";

const Hero = () => {
  const renderBullets = (item) => {
    return (
      <div className={item.css}>
        <h3>{item.header}</h3>
        <ul>
          {item.list.map((el, i) => {
            return (
              <li className="bullet-item" key={i}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="hero">
      <div className="content">
        <h1>Logistics Company</h1>
        <div>
          {renderBullets(benefits)}
          {renderBullets(company)}
        </div>
      </div>
    </div>
  );
};

export default Hero;

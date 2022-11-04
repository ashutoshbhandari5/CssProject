import React from "react";
import { showCaseList } from "../utils/lists";

const About = () => {
  return (
    <div className="about">
      <h2>We Are Increasing Business Success With IT Solution</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="showCase">
        {showCaseList.map((el, i) => {
          return (
            <div key={i} className="item">
              <span>{el.icon}</span>
              <h4>{el.header}</h4>
              <p>{el.text}</p>
            </div>
          );
        })}
      </div>
      <div className="clients">
        <h2>Featured clients</h2>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur id suscipit ex.
        </p>
        <div className="members">
          <div>
            <h3>CROLLA</h3>
            <p>Sample text. Click to select the Text Element.</p>
            <button>More</button>
          </div>
          <div>
            <h3>BINANCE</h3>
            <p>Sample text. Click to select the Text Element.</p>
            <button>More</button>
          </div>
          <div>
            <h3>EVGA</h3>
            <p>Sample text. Click to select the Text Element.</p>
            <button>More</button>
          </div>
          <div>
            <h3>TESLA</h3>
            <p>Sample text. Click to select the Text Element.</p>
            <button>More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { clientMemberList, showCaseList } from "../utils/lists";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-header">
        We Are Increasing Business Success With IT Solution
      </h2>
      <p className="about-info">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="about-content-one">
        {showCaseList.map((el, i) => {
          return (
            <div key={i} className="showcase-item">
              <span className="showcase-item_icon">{el.icon}</span>
              <h4 className="showcase-item_header">{el.header}</h4>
              <p className="showcase-item_info">{el.text}</p>
            </div>
          );
        })}
      </div>
      <div className="about-content-two">
        <h2 className="about-content-two_header">Featured clients</h2>
        <p className="about-content-two_info">
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur id suscipit ex.
        </p>
        <div className="clients">
          {clientMemberList.map((el, i) => {
            return (
              <div className="clients-item" key={i}>
                <h3 className="clients-item_header">{el.header}</h3>
                <p className="clients-item_info">{el.paragraph}</p>
                <button className="clients-item_btn">More</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

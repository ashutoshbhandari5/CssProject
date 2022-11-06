import React from "react";
import { footerList } from "../utils/lists";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <h4>Logistics Company</h4>
          <p>
            Company agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.em30
          </p>
        </div>
        <div className="grid-items">
          {footerList.map((el, i) => {
            return (
              <div className="list-items" key={i}>
                <h4>{el.header}</h4>

                {el.items.map((el, i) => {
                  return <p key={i}>{el}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;

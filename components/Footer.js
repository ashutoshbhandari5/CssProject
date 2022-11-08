import React from "react";
import { footerList } from "../utils/lists";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content_item">
          <h4>Logistics Company</h4>
          <p>
            Company agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.em30
          </p>
        </div>
        <div className="footer-content_item grid-content">
          {footerList.map((el, i) => {
            return (
              <div className="list-items" key={i}>
                <h4 className="list-items_header">{el.header}</h4>

                {el.items.map((el, i) => {
                  return (
                    <p className="list-items_info" key={i}>
                      {el}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="copyright">&#169; Logistics, All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;

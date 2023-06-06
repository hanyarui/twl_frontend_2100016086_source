import React from "react";
import P1 from "./../../assets/P1.jpg";
import P3 from "./../../assets/P3.jpg";
import P4 from "./../../assets/P4.jpg";

function Team() {
  return (
    <div className="container text-center">
      <h1 className="mt-3 mb-3">Team</h1>
      <div className="product-container">
        <div className="product-grid d-flex center">
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={P1} alt="Product" />
            <h3>Alexander Schmidt</h3>
            <p>Founder</p>
          </div>
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={P3} alt="Product" />
            <h3>John Smith</h3>
            <p>Co-Founder</p>
          </div>
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={P4} alt="Product" />
            <h3>Pierre Dubois</h3>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;

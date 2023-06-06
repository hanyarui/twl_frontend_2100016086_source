import React from "react";
import "./Products.css";
import ST from "./../../assets/st.png";
import DG from "./../../assets/dg.png";
import CX from "./../../assets/cx.png";
import DA from "./../../assets/da.jpg";

function Products() {
  return (
    <div className="container text-center">
      <h1 className="mt-3 mb-3">Our Products</h1>
      <div className="product-container">
        <div className="product-grid d-flex">
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={ST} alt="Product" />
            <h3>SmartTasker</h3>
            <p>
              Aplikasi manajemen tugas cerdas untuk pengaturan pekerjaan
              sehari-hari dengan lebih efisien.
            </p>
          </div>
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={DG} alt="Product" />
            <h3>DataGuard</h3>
            <p>
              Aplikasi keamanan data canggih untuk melindungi informasi sensitif
              dari ancaman keamanan.
            </p>
          </div>
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={CX} alt="Product" />
            <h3>ConnectX</h3>
            <p>
              Aplikasi komunikasi yang memungkinkan kolaborasi dengan rekan
              kerja dan mitra bisnis di seluruh dunia.
            </p>
          </div>
          <div className="product" style={{ marginLeft: "30px" }}>
            <img src={DA} alt="Product" />
            <h3>DataAnalyzer</h3>
            <p>
              Aplikasi analisis data kuat untuk menggali wawasan berharga dari
              kumpulan data perusahaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

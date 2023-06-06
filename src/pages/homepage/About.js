import React from "react";
import backgroundImage from "./../../assets/about.jpg";
import "./../../App.css";

function About() {
  return (
    <div className="background">
      <img src={backgroundImage} alt="Background" />
      <div className="konten">
        <h1>About Us</h1>
        <p className="paragraf">Kami adalah perusahaan yang bergerak di bidang teknologi informasi yang berfokus pada pengembangan aplikasi dan solusi bisnis. Kami berkomitmen untuk memberikan solusi terbaik kepada pelanggan kami.</p>
      </div>
    </div>
  );
}

export default About;

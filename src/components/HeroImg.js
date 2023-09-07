import React from "react";
import "./HeroImgStyle.css";
import IntroImg from "../assets/background-for-portfolio.jpg";
import { Link } from "react-router-dom";

export default function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Loading" />
      </div>
      <div className="content">
        <p>HI, I'm Shreenath</p>
        <h1> React Developer</h1>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyles.css"
import coverphoto3 from "../assets/photo3.png"
import coverphoto2 from "../assets/reactcover1.png"


export default function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Iam a React Frontend Developer. I create responsive secure web
          applications for my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={coverphoto3} className="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={coverphoto2} className="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}

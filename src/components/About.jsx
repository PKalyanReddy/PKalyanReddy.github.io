import React from "react";
import Skills from "./Skills";
import profile from "../images/profile.jpg";
const About = () => {
  return (
    <>
      <div id="about" className="about-section">
        <div className="about-text">
          <h1 className="about-heading" id="user-detail-name">
            Get to <b>know</b> me!
          </h1>
          <p id="user-detail-intro">
            Hi, my name is <b>K R Pavan Kalyan</b> and I am from Palamaner, Andhra
            Pradesh, India. I'm a <b>MERN stack web developer</b> and have
            completed my graduation in <b>Computer Science Engineering (BE)</b> in 2023.
            <br />
            <br />
            Currently, I have completed my <b>Full Stack development</b> course
            from <b>Masai</b>. I love to create original projects with beautiful
            designs. You can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
          </p>
        </div>

        <img
          src={profile} // Replace with your actual static image path
          className="home-img"
          alt="Profile"
        />
      </div>
    </>
  );
};

export default About;

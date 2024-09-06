import React from "react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Lottie from "lottie-react";
import ResumeButton from "./ResumeButton";

export const Home = () => {
  return (
    <div className="home_container">
      <div className="home-page" id="home">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>K R Pavan Kalyan</b>
          </h1>
          <Typed />

          <ResumeButton />
        </div>

        <Lottie animationData={SpaceBoy} loop={true} />
      </div>

      <div className="about-section">
        <div className="about-text">
          <h1 className="about-heading">
            Brief <b>introduction</b>
          </h1>
          <p>
          My journey in web development has been driven by a love for problem-solving and a commitment to continuous learning.
            Changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>Java and JavaScript</b> and know a bit of{" "}
            <b>Python</b> and am working on a few projects in the <b>MERN</b>{" "}
            stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b>, and{" "}
            <b>TypeScript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b> ☕
          </p>
        </div>
      </div>
    </div>
  );
};

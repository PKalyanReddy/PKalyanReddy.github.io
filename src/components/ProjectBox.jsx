import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    fundmitra: {
      Description:
        "The Fundmitra Platform is a web-based solution designed to assist students who face financial challenges in their education. This platform provides a space for students to create fundraising projects and allows donors to contribute to these causes.",
      TechStack: ["Nodejs", "Express", "MongoDB", "JavaScript", "HTML", "CSS", "Github", "React", "NPM", "Bootstrap", "Chakra UI"],
      Github: "https://github.com/rohit7979/Web-Wrestlers_048",
      Website: "https://fundmitra.netlify.app/",
    },
    ER_Diagram: {
      Description:
        "ER diagram looks very similar to the flowchart. However, ER Diagram includes many specialized symbols, and its meanings make this model unique. The purpose of ER Diagram is to represent the logical structure & entity framework infrastructure.",
      TechStack: ["React", "Redux", "Github", "JavaScript", "NPM", "Chakra UI", "React-flow", "Netlify", "Auth0"],
      Github: "https://github.com/PKalyanReddy/Declaration-DevOps_032",
      Website: "https://er-diagram-builder01.netlify.app/",
    },
    MMovies: {
      Description:
        "Masai Movies is an aggregator service for the entertainment industry whereby we can assist you with information and ticketing for movies. Intuitive design allowing easy navigation, search, and selection of movies, showtimes, and theaters",
      TechStack: ["JavaScript", "HTML", "CSS", "json-server", "MockAPI", "SCSS", "NPM", "Responsive Design", "Github"],
      Github: "https://github.com/Sahilz9/Salesforce-Sages_084",
      Website: "https://delicate-cucurucho-42501a.netlify.app/",
    },
  };

  const project = desc[projectName] || {};
  const { Description = "", TechStack = [], Github = "", Website = "" } = project;

  return (
    <div className="project-item">
      <img
        className="project-image"
        src={projectPhoto}
        alt={`Project display for ${projectName}`}
      />
      <div>
        <h3>{projectName}</h3>
        <p>{Description}</p>
        {TechStack.length > 0 && (
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <ul>
              {TechStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {Github && (
          <a href={Github} target="_blank" rel="noopener noreferrer">
            <button className="project-button">
              <FaGithub /> Github
            </button>
          </a>
        )}
        {Website && (
          <a href={Website} target="_blank" rel="noopener noreferrer">
            <button className="project-button">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;

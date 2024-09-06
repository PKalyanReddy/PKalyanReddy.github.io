import React from 'react';
import fundmitra from '../images/fundmitra.jpg';
import ER_Builder from '../images/ER_Builder.png';
import MMovies from '../images/MMovies.jpg';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-heading">My <b>Projects</b></h1>
      <div className="projects-list">
        <ProjectBox projectPhoto={fundmitra} projectName="fundmitra" />
        <ProjectBox projectPhoto={ER_Builder} projectName="ER_Diagram" />
        <ProjectBox projectPhoto={MMovies} projectName="MMovies" />
      </div>
    </section>
  );
}

export default Projects;

// import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   FaReact,
//   FaPython,
//   FaGitAlt,
//   FaGithub,
//   FaNpm,
//   FaFigma,
//   FaBootstrap,
//   FaJava,
// } from "react-icons/fa";
// import { DiNodejs, DiJavascript1 } from "react-icons/di";
// import {
//   SiExpress,
//   SiMongodb,
//   SiNetlify,
//   SiPostman,
//   SiVercel,
// } from "react-icons/si";
// import { AiFillThunderbolt } from "react-icons/ai";
// import Github from "./Github";

// // Separate component for individual skill icons
// const SkillIcon = ({ skill, icon }) => (
//   <div title={skill} className="skill-box" aria-label={skill}>
//     {icon}
//   </div>
// );

// const Skills = () => {
//   const skillIcons = [
//     { name: "C++", icon: <CgCPlusPlus /> },
//     { name: "React", icon: <FaReact /> },
//     { name: "JavaScript", icon: <DiJavascript1 /> },
//     { name: "Node", icon: <DiNodejs /> },
//     { name: "Express", icon: <SiExpress /> },
//     { name: "MongoDB", icon: <SiMongodb /> },
//     { name: "Git", icon: <FaGitAlt /> },
//     { name: "GitHub", icon: <FaGithub /> },
//     { name: "NPM", icon: <FaNpm /> },
//     { name: "Figma", icon: <FaFigma /> },
//     { name: "Bootstrap", icon: <FaBootstrap /> },
//     { name: "Netlify", icon: <SiNetlify /> },
//     { name: "Java", icon: <FaJava /> },
//     { name: "Thunderclient", icon: <AiFillThunderbolt /> },
//     // Add more skills as needed
//   ];

//   return (
//     <React.Fragment>
//       <div className="skills-section">
//         <h1 className="skills-heading" id="skills">
//           Professional Skillset
//         </h1>
//         <div className="new_skill">
//           {skillIcons.map((skill, index,) => (
//             <SkillIcon key={index} skill={skill.name} icon={skill.icon} />
//           ))}
//         </div>
//         <Github />
//       </div>
      
//     </React.Fragment>
//   );
// };

// export default Skills;


import React from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import Github from "./Github";

// Separate component for individual skill icons
const SkillIcon = ({ skill, icon }) => (
  <div title={skill} className="skill-box" aria-label={skill}>
    {icon}
  </div>
);

const Skills = () => {
  const skillIcons = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript", icon: <DiJavascript1 color="#F0DB4F" /> },
    { name: "Node", icon: <DiNodejs color="#68A063" /> },
    { name: "Express", icon: <SiExpress color="#303030" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#000000" /> },
    { name: "NPM", icon: <FaNpm color="#CB3837" /> },
    { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  ];

  return (
    <React.Fragment>
      <div className="skills-section">
        <h1 className="skills-heading" id="skills">
          Professional Skillset
        </h1>
        <div className="new_skill">
          {skillIcons.map((skill, index) => (
            <SkillIcon key={index} skill={skill.name} icon={skill.icon} />
          ))}
        </div>
        <Github />
      </div>
    </React.Fragment>
  );
};

export default Skills;


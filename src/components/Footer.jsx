import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pavan Kalyan</h4>
      <h4>Copyright &copy; 2024 KR</h4>
      <div className="footer-links">
        <a
          href="https://github.com/PKalyanReddy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pavan-kalyan-reddy-444063258/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:pavankalyanreddy1012@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-email"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About({ themeMode }) {
  return (
    <div className="about">
      <h1 className="skills">ABOUT ME</h1>
      <p className="info">
        Hello, my name is Arti Gupta. I am a self-taught web developer residing
        in India.I am self-motivated and enthusiastic about programming, with a
        desire to learn and work as part of a team. I have Knowledge of
        HTML,CSS, JAVASCRIPT and REACT. I have also done PGDCA(Post Graduation
        Diploma in Computer Applications) and have Knowledge of Adobe Photoshop,
        Adobe Pagemaker and Coreldraw.
      </p>
      <h1 className="skills">SKILLS</h1>

      <div>
        <div className="grid-icons">
          <p className="icon">
            <FaHtml5 size="3.5rem" />
            &nbsp; &nbsp;HTML
          </p>
          <p className="icon">
            <FaCss3 size="3.5rem" />
            &nbsp; &nbsp;CSS
          </p>
          <p className="icon">
            <FaJsSquare size="3.5rem" />
            &nbsp; &nbsp;JavaScript
          </p>
          <p className="icon">
            <FaReact size="3.5rem" />
            &nbsp; &nbsp;React
          </p>
          <p className="icon">
            <FaGitAlt size="3.5rem" />
            &nbsp; &nbsp;Git
          </p>
          <p className="icon">
            <FaGithub size="3.5rem" />
            &nbsp; &nbsp;Github
          </p>
        </div>
      </div>
    </div>
  );
}

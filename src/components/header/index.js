import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <div class="nav-center">
          <div class="nav-header">
            <button className="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
            <h1>
              <Link to="/">Arti Gupta</Link>
            </h1>
          </div>
          <ul className="links">
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

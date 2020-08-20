import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Brightness2 } from "@material-ui/icons";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function Header({ themeMode, lightMode, darkMode }) {
  return (
    <div>
      <nav>
        <div class="nav-center">
          <div class="nav-header">
            <button className="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
            <h1>
              <Link to="/" className="portfolio">
                Arti Gupta
              </Link>
            </h1>
          </div>
          <ul className="links">
            <li>
              <Link to="/about" className="link-btn">
                About me
              </Link>
            </li>
            <li>
              <Link to="/project" className="link-btn">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link-btn">
                Blog
              </Link>
            </li>
            <li>
              {themeMode === "dark" ? (
                <IconButton color="white" size="5rem" onClick={lightMode}>
                  <Brightness7Icon />
                </IconButton>
              ) : (
                <IconButton color="black" onClick={darkMode}>
                  <Brightness2 />
                </IconButton>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

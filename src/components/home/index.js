import React from "react";
import Img from "../../images/arti.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => (
  <div>
    <div className="flex-social">
      <img src={Img} className="profile" />
      <div className=" social-icons">
        <div>
          <a href="">
            <FaFacebookSquare size="3.5rem" color="#bc1e4a" />
          </a>
        </div>
        <div>
          <a href="">
            <FaInstagramSquare size="3.5rem" color="#bc1e4a" />
          </a>
        </div>
        <div>
          <a href="">
            <FaLinkedin size="3.5rem" color="#bc1e4a" />
          </a>
        </div>
        <div>
          <a href="">
            <FaTwitter size="3.5rem" color="#bc1e4a" />
          </a>
        </div>
        <div>
          <a href="">
            <FaGoogle size="3.5rem" color="#bc1e4a" />
          </a>
        </div>

        <div>
          <a href="">
            <FaGithub size="3.5rem" color="#bc1e4a" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="" className="w-[90px] cursor-pointer" />
        </div>
        <div className="m-8 mr-12 flex items-center justify-center gap-5 text-2xl cursor-pointer">
          <a href="https://www.linkedin.com/in/sai-vignesh-dhamerla-1178a6302/">
            <FaLinkedin color="white" />
          </a>
          <a href="https://github.com/saivigneshdhamerla">
            <FaGithub color="white" />
          </a>
          <a href="https://x.com/__saivignesh__">
            <FaSquareXTwitter color="white" />
          </a>
          <a href="https://www.instagram.com/__saivignesh__/?hl=en">
            <FaInstagram color="white" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

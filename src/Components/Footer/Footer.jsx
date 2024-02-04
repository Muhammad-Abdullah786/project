import React from "react";
import "./Footer.scss";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#acc8e5" }}>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      {/* Social Meida Links */}
      <div className="socal-Media">
        <ul className="Social-Meida-DeskTop">
          <li>
            <a href="">
              <FaFacebook className="FaceBook" />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube className="Youtube" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn className="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <p style={{ color: "#666" }}>
        ©{new Date().getFullYear()} Abdul Fatah | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

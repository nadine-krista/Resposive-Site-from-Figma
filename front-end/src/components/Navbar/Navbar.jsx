import React from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets/images";
const Navbar = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound <span className="red">DZign</span>
        </a>
        <ul>
          <li>
            <a href="#topics">About</a>
          </li>
          <li>
            <a href="#info">Course Details</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </nav>
      <div className="mobile-menu-container">
        <div className="close-icon">
          <img src={closeIcon} alt="" />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#topics">About</a>
          </li>
          <li>
            <a href="#info">Course Details</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

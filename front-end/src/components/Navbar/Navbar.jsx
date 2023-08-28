import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets/images";
const Navbar = () => {
    const [isActive,setIsActive] = useState(false)
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
        <div onClick={()=>setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </nav>
      <div className={`mobile-menu-container ${isActive?"active":""}`}>
        <div onClick={()=>setIsActive(false)} className="close-icon">
          <img src={closeIcon} alt="" />
        </div>
        <ul className="menu-items">
          <li onClick={()=>setIsActive(false)}>
            <a href="#topics">About</a>
          </li>
          <li onClick={()=>setIsActive(false)}>
            <a href="#info">Course Details</a>
          </li>
          <li onClick={()=>setIsActive(false)}>
            <a href="#blogs">Blog</a>
          </li>
          <li onClick={()=>setIsActive(false)}>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

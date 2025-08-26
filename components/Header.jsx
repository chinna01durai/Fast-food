import React from "react";
import logo from "../assets/image.png";

const header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="image not found" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default header;

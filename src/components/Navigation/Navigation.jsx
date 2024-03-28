import React from "react";
import logo from "../../assets/logo.png"
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" className="logo"/>
        </div>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Blogs</li>
          <li>About us</li>
        </ul>

        <button className="nav-btn">Login</button>
      </nav>
    </div>
  );
};

export default Navigation;

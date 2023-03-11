import React, { useState } from "react";
import "./AdminNavbar.css";



import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>T</span>ech
            <span>S</span>he
            <span>R</span>o
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Profiles</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/forum">Forum</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        
      </nav>

     
    </>
  );
};

export default Navbar;
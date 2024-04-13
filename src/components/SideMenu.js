// src/components/SideMenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/SideMenu.css';


function SideMenu() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`side-menu ${isSmallScreen ? 'small-screen' : ''}`}>
      <button className="toggle-button" onClick={toggleHamburger}>
        ☰ {/* Hamburger menu icon */}
      </button>
      <div className={`menu-content ${isSmallScreen ? 'hamburger-menu' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/profileForm">ProfileForm</Link>
          </li>
        </ul>
      </div>
    </div>
  );
 
}

export default SideMenu;

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <Link to="/" className="navbar-logo"> */}
          Logo
        {/* </Link> */}
        <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            {/* <Link to="/" className="nav-links" onClick={toggleMenu}> */}
              Home
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/about" className="nav-links" onClick={toggleMenu}> */}
              About
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/trips" className="nav-links" onClick={toggleMenu}> */}
              Trips
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
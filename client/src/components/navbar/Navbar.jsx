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
          <img src="/public/viajar.png" alt="" />
        {/* </Link> */}
        <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            {/* <Link to="/europa" className="nav-links" onClick={toggleMenu}> */}
              Europa
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/asia" className="nav-links" onClick={toggleMenu}> */}
              Asia
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/américa" className="nav-links" onClick={toggleMenu}> */}
              América
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/áfrica" className="nav-links" onClick={toggleMenu}> */}
              África
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/oceanía" className="nav-links" onClick={toggleMenu}> */}
              Oceanía
            {/* </Link> */}
          </li>
          <li className="nav-item sign-in">
            {/* <Link to="/signin" className="nav-links" onClick={toggleMenu}> */}
            Sign In
            {/* </Link> */}
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
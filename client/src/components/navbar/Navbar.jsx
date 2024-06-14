import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 960) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/public/viajar.png" alt="" />
        </Link>
        <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/trips/Europa" className="nav-links" onClick={toggleMenu}>
              Europa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trips/Asia" className="nav-links" onClick={toggleMenu}>
              Asia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trips/América" className="nav-links" onClick={toggleMenu}>
              América
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trips/África" className="nav-links" onClick={toggleMenu}>
              África
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trips/Oceanía" className="nav-links" onClick={toggleMenu}>
              Oceanía
            </Link>
          </li>
          <li className="nav-item sign-in">
            <Link to="/register" className="nav-links" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
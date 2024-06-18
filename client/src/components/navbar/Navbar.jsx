import React, { useState, useEffect, useContext} from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import PanelUsuario from '../panelUsuario/panelUsuario';

import Modal from '../modal/modal'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, handlefetchUserData } = useContext(UserContext);
  const[isModalOpen, setIsModalOpen] = useState(false)
  function openModal(){
    setIsModalOpen(true)
  }

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
          <img src="/viajar.png" alt="" />
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
          {user && (
            <li className="nav-item-sign-in">
              <button onClick = {openModal}className="trip-card__button">{user.username}</button>
              {isModalOpen &&
                <Modal isOpen={true} onClose={()=> {
                  setIsModalOpen(false)
                  }}>
                    <PanelUsuario user={user}></PanelUsuario>
                  {/* <h1 className="userName">
                    {user.username}
                  </h1>
                    <h2>Trips:</h2>
                  <div className='user_favoritos'>
                  <ul>
                    {user.trips.map(trip => (
                      <li>
                        {trip.name}
                        <img src={trip.imagen} alt={trip.name} className="trip-card__image" />
                        <button className='button_trips'>Comprar</button>
                        <button className='button_trips' onClick={()=>handledeletefavoritos(trip)}>Eliminar</button>
                        </li>
                      ))}
                  </ul>
                  </div>
                  <button className='button_trips' onClick={logOut}>Logout</button> */}
                </Modal>
              }

            </li>
          )}
          {!user && (
          <li className="nav-item sign-in">
            <Link to="/register" className="nav-links" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
            
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
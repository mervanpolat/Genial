// src/components/NavBar.jsx

import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Closes the menu (useful when a link is clicked)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">GENIAL</Link>
      </div>

      {/* BURGER ICON for mobile */}
      <button
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {/* Each span is one "line" */}
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span> {/* Typically, a burger has three lines */}
      </button>

      {/* NAV LINKS */}
      {/* Conditionally add "open" class so they appear on mobile when menuOpen = true */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/preis" onClick={closeMenu}>Preis</Link>
        </li>
        <li>
          <Link to="/kurse" onClick={closeMenu}>Kurse</Link>
        </li>
        <li>
          <Link to="/ueber-uns" onClick={closeMenu}>Über uns</Link>
        </li>
        <li>
          <Link to="/anmelden" onClick={closeMenu}>Anmelden</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default NavBar;

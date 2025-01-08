// NavBar.jsx

import  { useState } from "react";
import { Link } from "react-router-dom";
import { Button, useDisclosure } from "@chakra-ui/react";
import LoginPopper from "./LoginPopper/LoginPopper.jsx";
import styles from "./NavBar.module.css"; // Importing the CSS Module

function NavBar() {
  const { isOpen: isLoginOpen, onOpen, onClose } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle menu

  return (
      <>
        <nav className={styles.navbar}>
          <div className={styles.navbarLogo}>
            <Link to="/" className={styles.logoLink}>
              GENIAL
            </Link>
          </div>

          {/* Burger Menu Icon */}
          <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>

          <ul
              className={`${styles.navbarLinks} ${
                  menuOpen ? styles.navbarLinksOpen : ""
              }`}
          >
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/preis" onClick={() => setMenuOpen(false)}>
                Preis
              </Link>
            </li>
            <li>
              <Link to="/kurse" onClick={() => setMenuOpen(false)}>
                Kurse
              </Link>
            </li>
            <li>
              <Link to="/ueber-uns" onClick={() => setMenuOpen(false)}>
                Über uns
              </Link>
            </li>
            <li>
              <Button variant="link" onClick={onOpen}>
                Anmelden
              </Button>
            </li>
          </ul>
        </nav>

        {/* Login Modal */}
        <LoginPopper isOpen={isLoginOpen} onClose={onClose} />
      </>
  );
}

export default NavBar;

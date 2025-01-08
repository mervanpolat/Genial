import React from "react";
import { Link } from "react-router-dom";
import { Button, useDisclosure } from "@chakra-ui/react";
import LoginPopper from "./LoginPopper/LoginPopper.jsx";
import "./NavBar.css";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <>
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              GENIAL
            </Link>
          </div>

          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/preis">Preis</Link>
            </li>
            <li>
              <Link to="/kurse">Kurse</Link>
            </li>
            <li>
              <Link to="/ueber-uns">Über uns</Link>
            </li>
            <li>
              <Button variant="link" onClick={onOpen}>
                Anmelden
              </Button>
            </li>
          </ul>
        </nav>

        {/* Login Modal */}
        <LoginPopper isOpen={isOpen} onClose={onClose} />
      </>
  );
}

export default NavBar;

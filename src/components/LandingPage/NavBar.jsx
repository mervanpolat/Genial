import "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import LoginPopper from "./LoginPopper";
import "./NavBar.css";

function NavBar() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
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
            <Popover isOpen={isOpen} onClose={onClose}>
              <PopoverTrigger>
                <Button variant="link" onClick={onToggle}>
                  Anmelden
                </Button>
              </PopoverTrigger>
              <LoginPopper closePopper={onClose} />
            </Popover>
          </li>
        </ul>
      </nav>
  );
}

export default NavBar;

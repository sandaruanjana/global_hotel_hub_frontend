import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavbarStyles.css";

const NavBar = (props) => {
  const { currentUser, logout } = props;
  const mobileBreakpoint = 768;
  const isMobile = window.innerWidth < mobileBreakpoint;
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  if (isMobile) {
    return (
      <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        collapseOnSelect
        expand="lg"
        bg="body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav onSelect={() => setExpanded(false)}>
              <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
                Home
              </Nav.Link>
            
              
              {currentUser == null ? (
                <Nav.Link as={Link} to="/login" onClick={handleNavItemClick}>
                  Login
                </Nav.Link>
              ) : (
                <Nav.Link onClick={logout}>logout</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link to="/">GlobalHotelHub</Link>
          </h1>
          <ul className="nav-menu" id="nav-menu">
            <li className="nav-link" id="nav-link">
              <Link to="/">Explore</Link>
            </li>
            {currentUser != null && (
          <li className="nav-link" id="nav-link">
            <Link to="/history">History</Link>
          </li>
        )}
            {currentUser == null ? (
              <li className="nav-link" id="nav-link">
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav-link" id="nav-link">
                <Link onClick={logout}>Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
};

export default NavBar;

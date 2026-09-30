import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              logo
            </Link>

            {/* Nav links */}
            <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                onClick={closeMenu}
              >
                About
              </NavLink>
              <Link to="/get-started" className="navbar-cta" onClick={closeMenu}>
                Get Started
              </Link>
            </nav>
          </div>        
        </header>
    );
}
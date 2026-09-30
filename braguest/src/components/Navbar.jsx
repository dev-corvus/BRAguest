import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

    return (
        <header className="navbar">
        <div className="navbar-container">
            <a href="/" className="navbar-logo">logo<span></span></a>
        {/* <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button> */}

        {/* Nav links */}
            <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#contact" className="navbar-cta" onClick={() => setIsOpen(false)}>Get Started</a>
            </nav>
        </div>        
      </header>
    );
}
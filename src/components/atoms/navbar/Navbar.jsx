import React, { useState } from 'react';
import Logo from '../../../assets/images/AmapolaDev.png';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__logo">
        <h1 className="navbar__text">AmapolaDev</h1>
        <img src={Logo} alt="AmapolaDev Logo" className="navbar__image" />
      </a>
      <button
        className={`navbar__toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </button>
      <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="navbar__menu-item">
            <a href={item.href} className="navbar__menu-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">E-COM WEBSITE</Link>
      
      <div className="nav-links">
        {/* ADD THIS HOME LINK */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
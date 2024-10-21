import React from 'react'
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/education">education</Link></li>
          
          <li><Link to="/links">links</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
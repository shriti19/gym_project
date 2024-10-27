import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <p >ELITE EDGE FITNESS</p>
      <nav>
        <ul className='navbar-links'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/wks">Workout Sessions</Link></li>
          <li><Link to="/gall">Gallery</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

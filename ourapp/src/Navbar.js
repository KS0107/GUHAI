import React from 'react';
import './Navbar.css';
import logo from './logo.png';

console.log(logo);

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <img src={logo} />
          </li>

          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Example</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Ex</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Ex</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Ex</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';
import logo from './logo.png';

console.log(logo);


const Navbar = () => {
  return (
    <div>
      <nav class='navbar'>
        <ul class='nav-list'>
          <li class='nav-item'>
            <img src={logo} />
          </li>

          <li class='nav-item'>
          <a href="/">Home</a>
          </li>
          <li class='nav-item'>
          <a href="/">Example</a>
          </li>
          <li class='nav-item'>
          <a href="/">Ex</a>
          </li>
          <li class='nav-item'>
          <a href="/">Ex</a>
          </li>
          <li class='nav-item'>
          <a href="/">Ex</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

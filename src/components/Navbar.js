import React from 'react';
import Login from './Login';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>
          <Login />
        </li>
        <li>Register</li>
        <li>Create Post</li>
      </ul>
    </nav>
  );
};

export default Navbar;

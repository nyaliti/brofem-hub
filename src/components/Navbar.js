import React from 'react';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';


// eslint-disable-next-line react/prop-types
const Navbar = ({isAuthenticated, userRole, handleLogout}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && userRole === 'user' && (
          <li>
            <Link to="/comment">comment</Link>
          </li>
        )}
        {isAuthenticated && userRole === 'author' && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {isAuthenticated && userRole === 'admin' && (
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        )}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

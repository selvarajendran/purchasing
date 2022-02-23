import React from 'react';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem'
      }}
    >
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>
        <Link to="/signup">Signup</Link>
      </nav>
      <nav>
        <Link to="/forgotpassword">Forgot Password</Link>
      </nav>
    </nav>
  );
};

export default LoginNav;

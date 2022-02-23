import React from 'react';
import { useSelector } from 'react-redux';
import { LoginLeft } from '../components/login';

const Layout = ({ children }) => {
  const loggedin = useSelector((state) => state.login.loggedIn);
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '490px',
          float: 'left'
        }}
      >
        {loggedin ? null : <LoginLeft />}
      </div>
      <div
        style={{
          width: '60vw'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

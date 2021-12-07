import React from 'react';
import DashNav from '../components/nav/dashboard';
import LoginNav from '../components/nav/login';
import loggedin from '../utils/const';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          width: '25%',
          border: '1px solid red'
        }}
      >
        {loggedin ? <DashNav /> : <LoginNav />}
      </div>
      <div
        style={{
          width: '75%'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

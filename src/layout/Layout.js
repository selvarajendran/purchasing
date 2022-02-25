import React from 'react';
import { useSelector } from 'react-redux';
import { LoginLeft } from '../components/login';
import { Header } from '../components/home';

const Layout = ({ children }) => {
  const loggedin = useSelector((state) => state.login.loggedIn);
  return (
    <>
      {!loggedin && (
        <div style={{ display: 'flex' }}>
          <div
            style={{
              width: '425px',
              float: 'left'
            }}
          >
            <LoginLeft />
          </div>
          <div
            style={{
              width: '60vw'
            }}
          >
            {children}
          </div>
        </div>
      )}
      {loggedin && (
        <div className="main">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <div className="nav">Nav</div>
            <div className="content1">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;

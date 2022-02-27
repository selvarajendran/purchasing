import React from 'react';
import { useDispatch } from 'react-redux';

import * as loginAction from '../../store/action/login';
import logo from '../../assets/img/header/logo.png';
import user from '../../assets/img/header/user.png';
import logout from '../../assets/img/header/logout.png';

const Header = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(loginAction.logout());
  };
  return (
    <div style={{ display: 'flex', width: '-webkit-fill-available' }}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="header-search-par">
        <div className="header-search" />
      </div>
      <div className="header-right-section">
        <div className="header-lan-button">English</div>
        <div className="header-user">
          <img src={user} alt="" />
          <div className="header-user-title">Selva Raj</div>
        </div>
        <div
          className="header-log"
          onClick={handleOnClick}
          onKeyDown={handleOnClick}
          aria-hidden="true"
        >
          <img src={logout} alt="" />
          <div className="header-logout">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

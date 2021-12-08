import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/action/login';

const DashNav = () => {
  const dispatch = useDispatch();
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem'
      }}
    >
      <nav>Accounts</nav>
      <nav>
        <Link to="/account/supplier">Supplier</Link>
      </nav>
      <nav>
        <Link to="/account/manufacture">Manufacture</Link>
      </nav>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default DashNav;

import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
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
    </nav>
  );
};

export default DashNav;

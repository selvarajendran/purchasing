import React from 'react';
import { LoginHeader, LoginTitle } from '../components/login';

const login = () => {
  return (
    <div
      style={{ paddingTop: '40px', paddingLeft: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <LoginHeader backText="Back" title="Personal Info." step="STEP 01/02" />
      <div style={{ display: 'flex', flexDirection: 'column', margin: '30px' }}>
        <LoginTitle
          title="Register Account!"
          subTitle="For the purpose of industry regulation, your details are required."
        />
      </div>
    </div>
  );
};

export default login;

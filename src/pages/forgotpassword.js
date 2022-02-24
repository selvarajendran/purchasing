import React from 'react';

import { LoginHeader, LoginTitle, LoginForm, Divider } from '../components/login';
import google from '../assets/img/google.png';

const forgotPassword = () => {
  const handleOnClick = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{ paddingTop: '20px', paddingLeft: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <LoginHeader backText="Back" />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px', marginTop: '60px' }}
      >
        <LoginTitle
          title="Forgot Password"
          subTitle="For the purpose of industry regulation, your details are required."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px' }}>
        <LoginForm
          fields={[
            {
              labelforHtml: 'Email Address',
              placeholder: 'Enter email address',
              type: 'email',
              isMandatory: true,
              default: '',
              name: 'email'
            }
          ]}
          action={handleOnClick}
          buttonText="Send the Password Reset Email"
        />
      </div>
      <div style={{ marginLeft: '70px', marginTop: '14px', display: 'flex' }}>
        <Divider />
        <span className="or">Or</span>
        <Divider />
      </div>
      <div className="g-button">
        <img src={google} alt="" />
        <div className="g-text">Register with Google</div>
      </div>
    </div>
  );
};

export default forgotPassword;

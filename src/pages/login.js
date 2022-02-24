import React from 'react';

import { LoginHeader, LoginTitle, LoginForm, Divider } from '../components/login';
import google from '../assets/img/google.png';

const login = () => {
  const handleOnClick = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{ paddingTop: '20px', paddingLeft: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <LoginHeader title="Login" />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px', paddingTop: '20px' }}
      >
        <LoginTitle
          title="Login Your Account!"
          subTitle="Enter your profile details to login to your account."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px' }}>
        <LoginForm
          fields={[
            {
              labelforHtml: 'Username',
              placeholder: 'Enter username',
              type: 'text',
              isMandatory: true,
              default: '',
              name: 'username'
            },
            {
              labelforHtml: 'Email Address',
              placeholder: 'Enter email address',
              type: 'email',
              isMandatory: true,
              default: '',
              name: 'email'
            },
            {
              labelforHtml: 'Create Password',
              placeholder: 'Enter password',
              type: 'password',
              isMandatory: true,
              default: '',
              name: 'password'
            }
          ]}
          action={handleOnClick}
          buttonText="Login Account"
          forgotPassword
          signup
        />
      </div>
      <div style={{ marginLeft: '70px', marginTop: '14px', display: 'flex' }}>
        <Divider />
        <span className="or">Or</span>
        <Divider />
      </div>
      <div className="g-button">
        <img src={google} alt="" />
        <div className="g-text">Login with Google</div>
      </div>
    </div>
  );
};

export default login;

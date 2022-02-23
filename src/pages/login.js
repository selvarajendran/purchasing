import React from 'react';
import { LoginHeader, LoginTitle, LoginForm, Divider } from '../components/login';
import google from '../assets/img/google.png';

const login = () => {
  return (
    <div
      style={{ paddingTop: '20px', paddingLeft: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <LoginHeader backText="Back" title="Personal Info." step="STEP 01/02" />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px' }}>
        <LoginTitle
          title="Register Account!"
          subTitle="For the purpose of industry regulation, your details are required."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px' }}>
        <LoginForm
          fields={[
            {
              labelforHtml: 'Your Full Name',
              placeholder: 'Enter Full Name',
              type: 'text',
              isMandatory: true,
              default: '',
              name: 'firstName'
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
          action={(data) => {
            console.log(data);
          }}
          buttonText="Register Account"
          termsAndCondition
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

export default login;

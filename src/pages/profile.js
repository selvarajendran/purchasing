import React from 'react';

import { LoginHeader, LoginTitle, LoginForm } from '../components/login';

const profile = () => {
  const handleOnClick = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{ paddingTop: '20px', paddingLeft: '30px', display: 'flex', flexDirection: 'column' }}
    >
      <LoginHeader backText="Back" title="Residency Info." step="STEP 02/02" />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px', marginTop: '50px' }}
      >
        <LoginTitle
          title="Complete Your Profile!"
          subTitle="For the purpose of industry regulation, your details are required."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '70px' }}>
        <LoginForm
          fields={[
            {
              labelforHtml: 'Phone Number',
              placeholder: 'Enter Phone Number',
              type: 'text',
              isMandatory: false,
              default: '',
              name: 'phoneNumber'
            },
            {
              labelforHtml: 'Your Address',
              placeholder: 'Please enter address',
              type: 'text',
              isMandatory: false,
              default: '',
              name: 'address'
            },
            {
              labelforHtml: 'Country of Residence',
              placeholder: 'Please select',
              type: 'select',
              isMandatory: false,
              default: '',
              name: 'country'
            }
          ]}
          action={handleOnClick}
          buttonText="Save & Continue"
        />
      </div>
    </div>
  );
};

export default profile;

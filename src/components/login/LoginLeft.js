import React from 'react';
import bg from '../../assets/img/Frame.png';
import icon from '../../assets/img/login-tick.png';

const LoginLeft = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div
        style={{
          width: '100%',
          height: '100vh'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100vh',
            minHeight: '600px',
            minWidth: '400px',
            background: `url(${bg})`,
            backgroundPosition: 'left',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            color: '#fff',
            width: '49%',
            top: '44%',
            left: '67px'
          }}
        >
          <div style={{ flexWrap: 'wrap', width: 'inherit', minWidth: '250px', maxWidth: '300px' }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            <div style={{ marginTop: '20px' }}>
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;

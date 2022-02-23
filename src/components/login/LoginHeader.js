import React from 'react';
import PropTypes from 'prop-types';
import back from '../../assets/img/icon/navigation/back.png';

const LoginHeader = ({ backText, step, title }) => {
  return (
    <div style={{ display: 'flex', width: '100%', minWidth: '500px' }}>
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <img src={back} alt="" />
        <span className="back">{backText}</span>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        {step && <span className="rightStep">{step}</span>}
        {title && <span className="rightTitle">{title}</span>}
      </div>
    </div>
  );
};

LoginHeader.defaultProps = {
  step: null,
  title: null
};

LoginHeader.propTypes = {
  backText: PropTypes.string.isRequired,
  step: PropTypes.string,
  title: PropTypes.string
};

export default LoginHeader;

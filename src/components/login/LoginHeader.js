import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import back from '../../assets/img/icon/navigation/back.png';

const LoginHeader = ({ backText, step, title }) => {
  const history = useHistory();
  const backOnClick = () => {
    history.goBack();
  };
  return (
    <div style={{ display: 'flex', width: '100%', minWidth: '500px' }}>
      {backText && (
        <div
          onClick={backOnClick}
          onKeyDown={backOnClick}
          aria-hidden="true"
          style={{ display: 'flex', alignItems: 'start' }}
        >
          <img src={back} alt="" />
          <span className="back">{backText}</span>
        </div>
      )}
      <div style={{ marginLeft: 'auto' }}>
        {step && <span className="rightStep">{step}</span>}
        {title && <span className="rightTitle">{title}</span>}
      </div>
    </div>
  );
};

LoginHeader.defaultProps = {
  step: null,
  title: null,
  backText: null
};

LoginHeader.propTypes = {
  backText: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string
};

export default LoginHeader;

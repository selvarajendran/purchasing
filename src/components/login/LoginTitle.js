import React from 'react';
import PropTypes from 'prop-types';

const LoginTitle = ({ title, subTitle }) => {
  return (
    <>
      <div className="loginTitle">{title}</div>
      <div className="loginSubTitle">{subTitle}</div>
    </>
  );
};

LoginTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default LoginTitle;

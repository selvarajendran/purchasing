import React from 'react';
import { useDispatch } from 'react-redux';
import * as loginAction from '../store/action/login';

const login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(loginAction.login());
        }}
      >
        Login
      </button>
    </>
  );
};

export default login;

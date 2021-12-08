export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => {
  return {
    type: LOGIN,
    credentials: {
      username,
      password
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

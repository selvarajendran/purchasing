import { LOGOUT, LOGIN } from '../action/login';

const initialState = {
  loggedIn: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: true
      };
    case LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

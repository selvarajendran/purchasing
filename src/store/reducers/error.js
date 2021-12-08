import { SET_ERROR, RESET_ERROR } from '../action/error';

const initialState = {
  err: null
};

const error = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        err: action.error
      };
    case RESET_ERROR:
      return {
        err: null
      };
    default:
      return state;
  }
};

export default error;

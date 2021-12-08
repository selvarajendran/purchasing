import { SET_LOADING } from '../action/loading';

const initialState = {
  loading: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.loading
      };
    default:
      return state;
  }
};

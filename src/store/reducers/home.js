import { TOGGLE_MENU } from '../action/home';

const initialState = {
  showMenu: false
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        showMenu: !state.showMenu
      };
    default:
      return state;
  }
};

export default home;

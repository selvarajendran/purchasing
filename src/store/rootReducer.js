import { combineReducers } from 'redux';
// Common Reducers
import errorReducer from './reducers/error';
import loadingReducer from './reducers/loading';

// Screen Reducers
import loginReducer from './reducers/login';
import homeReducer from './reducers/home';

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
  loading: loadingReducer,
  home: homeReducer
});

export default rootReducer;

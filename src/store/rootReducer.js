import { combineReducers } from 'redux';
// Common Reducers
import errorReducer from './reducers/error';
import loadingReducer from './reducers/loading';

// Screen Reducers
import loginReducer from './reducers/login';

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
  loading: loadingReducer
});

export default rootReducer;

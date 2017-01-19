import { combineReducers } from 'redux';
import authenticate from './authenticate';


const rootReducer = combineReducers({
  isLoggedIn: authenticate
});

export default rootReducer;

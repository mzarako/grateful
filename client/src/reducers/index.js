import { combineReducers } from 'redux';
import authenticate from './authenticate';


const rootReducer = combineReducers({
  loggedIn: authenticate
});

export default rootReducer;

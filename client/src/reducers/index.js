import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticate from './authenticate.reducer';


const rootReducer = combineReducers({
	form,
  	auth: authenticate
});

export default rootReducer;

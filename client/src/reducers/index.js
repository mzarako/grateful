import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user-info.reducer';
import moments from './moments.reducer';
import authenticate from './authenticate.reducer';


const rootReducer = combineReducers({
	form,
	user,
	moments,
  auth: authenticate
});

export default rootReducer;

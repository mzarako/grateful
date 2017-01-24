import { SET_EMAIL, SET_NAME, UNAUTH_USER } from '../actions/types';

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case SET_EMAIL:
      localStorage.setItem('email', action.payload);
    	return { ...state, email: action.payload };
    case SET_NAME:
      localStorage.setItem('name', action.payload);
    	return { ...state, name: action.payload };
    case UNAUTH_USER:
    	return {};
    default:
    	return state;
  }
};

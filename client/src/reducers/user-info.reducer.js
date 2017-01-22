import { SET_EMAIL, SET_NAME, UNAUTH_USER } from '../actions/types';

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case SET_EMAIL:
    	return { ...state, email: action.payload };
    case SET_NAME:
    	return { ...state, name: action.payload };
    case UNAUTH_USER:
    	return { ...state, name: '' };
    default:
    	return state;
  }
};

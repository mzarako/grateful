import { MOMENTS_FETCHED, UNAUTH_USER } from '../actions/types';

export default function moments(state = [], action) {
  switch (action.type) {
    case MOMENTS_FETCHED:
    	return action.payload;
    case UNAUTH_USER:
      return [];
    default:
    	return state;
  }
  return state;
};

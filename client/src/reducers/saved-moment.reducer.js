import { MOMENT_SAVED, CLEAR_SAVED } from '../actions/types';

export default function userInfo(state = false, action) {
  switch (action.type) {
    case MOMENT_SAVED:
    	return true;
    case CLEAR_SAVED:
    	return false;
    default:
    	return state;
  }
};

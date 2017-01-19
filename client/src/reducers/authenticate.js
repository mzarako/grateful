import { LOGIN, SIGNOUT } from '../actions/types';

export default function authenticate(state = false, action) {
  let isLoggedIn = state;
  switch (action.type) {
    case LOGIN: return true;
    case SIGNOUT: return false;
    default: return isLoggedIn;
  }
};

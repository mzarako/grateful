import { LOGIN } from '../actions/types';

export default function authenticate(state = false, action) {
  let isLoggedIn = state;
  switch (action.type) {
    case LOGIN: return !isLoggedIn;
    default: return isLoggedIn;
  }
};

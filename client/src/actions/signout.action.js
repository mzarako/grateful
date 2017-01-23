import { UNAUTH_USER } from './types';
import { browserHistory } from 'react-router';

export default function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  browserHistory.push('/');
  return {
    type: UNAUTH_USER
  }
}

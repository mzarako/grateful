import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SET_NAME } from './types';
const ROOT_URL = 'http://localhost:3090';


function login({ email, password }) {
  	return dispatch => {
  		axios.post(`${ROOT_URL}/auth/login`, { email, password })
  			.then(response => {
          dispatch({ type: AUTH_USER });
          dispatch({ type: SET_NAME, payload: response.data.name });
  				localStorage.setItem('token', response.data.token);
          localStorage.setItem('name', response.data.name);
          browserHistory.push('/write-a-moment');
  			})
  			.catch(() => {
  				dispatch(authError('Wrong Password'));
  			});
	}
}

function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

module.exports = { login, authError };

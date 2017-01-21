import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';
const ROOT_URL = 'http://localhost:3090';


function login({ email, password }) {
  	return function(dispatch) {
  		axios.post(`${ROOT_URL}/auth/login`, { email, password })
  			.then(response => {
  				dispatch({ type: AUTH_USER });
  				localStorage.setItem('token', response.data.token);
  				browserHistory.push('/write-a-moment');
  			})
  			.catch(() => {
  				dispatch(authError('Bad Login Info'));
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
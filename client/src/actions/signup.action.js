import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SET_NAME } from './types';
const ROOT_URL = 'http://localhost:3090';


function signup({ password, name }) {
    const email = localStorage.getItem('email');
  	return function(dispatch) {
  		axios.post(`/auth/signup`, { email, password, name })
  			.then(response => {
  				dispatch({ type: AUTH_USER });
          dispatch({ type: SET_NAME, payload: name });
  				localStorage.setItem('token', response.data.token);
  				browserHistory.push('/user-home');
  			})
  			.catch(response => {
  				dispatch(authError(response.data.error));
  			});

	}
}

function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

module.exports = { signup };

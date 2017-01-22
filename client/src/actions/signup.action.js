import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';
const ROOT_URL = 'http://localhost:3090';


function signup({ email, password, name }) {
  	return function(dispatch) {
  		axios.post(`${ROOT_URL}/auth/signup`, { email, password, name })
  			.then(response => {
          console.log(email, password, name);
  				dispatch({ type: AUTH_USER });
  				localStorage.setItem('token', response.data.token);
  				browserHistory.push('/write-a-moment');
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

module.exports = { signup, authError };

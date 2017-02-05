import axios from 'axios';
import { browserHistory } from 'react-router';
import { SET_EMAIL } from './types';
const ROOT_URL = 'http://localhost:3090';
// const ROOT_URL = '';

function searchEmails(email) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/auth`, { email })
			.then(response => {
        dispatch({ type: SET_EMAIL, payload: email });
        if (response.data.emailFound === 'yes') {
          browserHistory.push('/login');
        }
        else {
          browserHistory.push('/signup');
        }
			})
			.catch(() => {
				dispatch({ type: 'do nothing'});
			});

	}
}

module.exports = { searchEmails };

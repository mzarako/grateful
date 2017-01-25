import axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:3090';
import { MOMENT_SAVED } from './types'

export default function createMoment({ date, moment }) {
	return dispatch => {
		const header = { headers: { authorization: localStorage.getItem('token') } };
		const email = localStorage.getItem('email');
		const request = axios.post(
	    `/moment`,
			{ date, moment, email },
	    header
	  )
		.then(() => {
			browserHistory.push('/user-home');
			dispatch({ type: MOMENT_SAVED });
		});
	}
}

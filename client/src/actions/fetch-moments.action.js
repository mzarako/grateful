import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import { MOMENTS_FETCHED } from './types'

const token = localStorage.getItem('token');
const email = localStorage.getItem('email');
const header = { headers: { authorization: token, username: email } };

export default function createMoment() {
	return dispatch => {
		axios.get( `${ROOT_URL}/moment`, header )
		.then(response => {
			const moments = response.data.moments;
			dispatch({ type: MOMENTS_FETCHED, payload: moments });
		})
		.catch(() => {
			console.log('fetch-moments failed');
		});
	}
}

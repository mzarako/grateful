import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

const header = { headers: { authorization: localStorage.getItem('token') } };

export default function fetchMessage() {
	const request = axios.get(`${ROOT_URL}/main`, {
			headers: { authorization: localStorage.getItem('token') }
		}).then(response => {
				console.log(response);
			});
	return {
		type: 'do nothing'
	}
}

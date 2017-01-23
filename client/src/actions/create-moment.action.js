import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

const header = { headers: { authorization: localStorage.getItem('token') } };

export default function createMoment({ date, moment, id }) {
	console.log(header);
	const request = axios.post(
    `${ROOT_URL}/moment`,
		{ date, moment, id: id.toString(), email: localStorage.getItem('email') },
    header
  ).then(response => {
				console.log(response);
			});
	return {
		type: 'do nothing'
	}
}

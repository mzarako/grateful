import axios from 'axios';
import { AJAX_TEST } from './types';

export default function ajax_test(arg) {
  return {
    type: AJAX_TEST,
    payload: test_request(arg)
  }
}

function test_request(arg) {
  const url = '/write-a-moment';
  const body = { "stuff": arg };
  console.log(body);
  const request = axios.post(url, body);
  request.then( (res) => { console.log(res.data) });
}

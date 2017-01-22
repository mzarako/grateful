import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';
import { AUTH_USER, SET_EMAIL, SET_NAME } from './actions/types';


const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: AUTH_USER });
}
const email = localStorage.getItem('email');
if (email) {
	store.dispatch({ type: SET_EMAIL, payload: email });
}
const name = localStorage.getItem('name');
if (name) {
	store.dispatch({ type: SET_NAME, payload: name });
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.querySelector('.container'));

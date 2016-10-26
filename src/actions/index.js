import axios from 'axios';
import { browserHistory } from 'react-router';
import { GET_BOOKS, AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_BOARD, ADD_NOTIFICATION, ADD_PIN, DELETE_PIN } from './types';
import config from '../../config/config';

const ROOT_URL = 'http://localhost:3090';
const GOOGLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:';
const GOOGLE_OPTIONS = '&country=US&maxResults=20';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function addNotification(message, level) {
  return {
    type: ADD_NOTIFICATION,
    message: message,
    level: level
  };
}

export function getBooks(term) {
  const searchTerm = `${GOOGLE_URL}${term}${GOOGLE_OPTIONS}&key=${config.API_KEY}`;
  return function (dispatch) {
    axios.get(searchTerm)
      .then((response) => {
        dispatch({
          type: GET_BOOKS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log('ACTION Error: ', err);
      });
  };
}

export function signinUser({ username, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, { username, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/recommendations');
        dispatch(fetchBoard());
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ username, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { username, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/recommendations');
      })
      .catch((response) => {
        dispatch(addNotification(response.data.message, response.data.level));
      });
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchBoard() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/fetchboard`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({
          type: FETCH_BOARD,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(addNotification('Sorry, something went wrong fetching your board. A team of highly trained monkeys has been dispatched to deal with this situation.', 'error'));
      });
  };
}

export function addPin(pin) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/addpin`, { add: pin }, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({
          type: ADD_PIN,
          payload: pin
        });
        dispatch(addNotification(response.data.message, response.data.level));
      })
      .catch(() => {
        dispatch(addNotification('Sorry, something went wrong adding the pin. A team of highly trained monkeys has been dispatched to deal with this situation.', 'error'));
      });
  };
}

export function deletePin(deleteid) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/deletepin`, { delete: deleteid }, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({
          type: DELETE_PIN,
          payload: deleteid
        });
        dispatch(addNotification(response.data.message, response.data.level));
      })
      .catch(() => {
        dispatch(addNotification('Sorry, something went wrong deleting the pin. A team of highly trained monkeys has been dispatched to deal with this situation.', 'error'));
      });
  };
}

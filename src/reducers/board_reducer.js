import update from 'react-addons-update';
import { FETCH_BOARD, ADD_PIN, DELETE_PIN } from '../actions/types';

const INITIAL_STATE = {
  board: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return { ...state, board: action.payload };
    case ADD_PIN:
      return update(state, { board: { $push: [action.payload] } });
    case DELETE_PIN:
      return { board: state.board.filter(val => val.id !== action.payload) };
  }
  return state;
}

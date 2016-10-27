import { ADD_NOTIFICATION } from '../actions/types';

export default function notification(state = {}, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        message: action.message,
        level: action.level,
        position: action.position
      });
    default:
      return state;
  }
}

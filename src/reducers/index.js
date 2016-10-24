import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import bookReducer from './reducer_books';
import authReducer from './auth_reducer';
import boardReducer from './board_reducer';
import notification from './notification_reducer';

const rootReducer = combineReducers({
  form: form,
  books: bookReducer,
  auth: authReducer,
  board: boardReducer,
  notification
});

export default rootReducer;

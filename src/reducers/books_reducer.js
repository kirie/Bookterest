import { GET_BOOKS } from '../actions/types';

// Reducer for getting books
export default function (state = { booklist: [] }, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, booklist: action.payload.items };
  }
  return state;
}

import reducer from '../../src/reducers/books_reducer';
import { GET_BOOKS } from '../../src/actions/types';

describe('Books reducer', () => {
  it('should return an empty initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ booklist: [] });
  });

  it('should handle a payload that returns 2 book objects', () => {
    const action = { type: GET_BOOKS, payload: { items: [{}, {}] } };
    expect(
      reducer(undefined, action).booklist.length)
      .toEqual(2);
  });
});

import reducer from '../../src/reducers/books_reducer';
import { GET_BOOKS } from '../../src/actions/types';

describe('Books reducer', () => {
  it('should return an empty initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ booklist: [] });
  });

  it('should handle 2 incoming books', () => {
    const action = { type: GET_BOOKS, payload: { items: [{}, {}] } };
    expect(
      reducer(undefined, action).booklist.length)
      .toEqual(2);
  });
});

import reducer from '../../src/reducers/books_reducer';
import * as types from '../../src/actions/types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({booklist: []});
  });
});
import { expect } from '../test_helper';
import { GET_BOOKS } from '../../src/actions/types';
import { getBooks } from '../../src/actions';

describe('actions', () => {
  describe('Action Types', () => {
    it('Get Books', () => {
      expect(GET_BOOKS).to.equal('get_books');
    });
  });
});

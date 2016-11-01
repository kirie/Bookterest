import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

describe('actions', () => {
  it('should return an action object for notification', () => {
    const testAction = {
      type: types.ADD_NOTIFICATION,
      message: 'Hello',
      level: 'success'
    };
    expect(actions.addNotification('Hello', 'success')).toEqual(testAction);
  });
});

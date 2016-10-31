import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../src/components/not_found';

jest.mock('react-dom');

describe('Not Found Component (Snapshot)', () => {
  it('Not Found Renders', () => {
    const component = renderer.create(<NotFound />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

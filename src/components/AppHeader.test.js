import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from './AppHeader.js';

it('renders header correctly', () => {
  const tree = renderer
    .create(<AppHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

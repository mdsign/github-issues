import React from 'react';
import AppHeader from './AppHeader.js';
import renderer from 'react-test-renderer';

it('renders header correctly', () => {
  const tree = renderer
    .create(<AppHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
